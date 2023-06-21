import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { entriesApi } from '@/apis';
import { Entry } from '@/interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}


export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );

    const addNewEntry = ( description: string ) => {
      
      const newEntry: Entry = {
        _id: uuidv4(),
        description: description, // Tambien se podria dejar solo un description ya que es redundante
        createdAt: Date.now(),
        status: 'pending'
      }

      dispatch({ type: '[Entry] Add-Entry', payload: newEntry });

    }


    const updateEntry = ( entry: Entry ) => {

      dispatch({ type: '[Entry] Entry- Updated', payload: entry });

    }


    const refreshEntries = async() => {
      const { data } = await entriesApi.get<Entry[]>('/entries');
      dispatch({ type: '[Entry] Refresh-Data', payload: data })
    };

    useEffect(() => {
      refreshEntries();
    }, []);
    



  return (
    <EntriesContext.Provider value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
    }}>
        { children }
    </EntriesContext.Provider>
  )
};