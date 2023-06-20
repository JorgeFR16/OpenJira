import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '@/interfaces';

import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
      {
        _id: uuidv4(),
        description: 'Pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aut est quidem id dignissimos. Quidem, consequuntur optio incidunt voluptatem doloribus',
        status: 'pending',
        createdAt: Date.now(),
      },
      {
        _id: uuidv4(),
        description: 'In-Progress: Enim aut est quidem id dignissimos. Quidem, consequuntur optio incidunt voluptatem doloribus, itaque ex animi iusto non id magnam dignissimos rem iste!',
        status: 'in-progress',
        createdAt: Date.now()-1000000,
      },
      {
        _id: uuidv4(),
        description: 'Finished:itaque ex animi iusto non id magnam dignissimos rem iste!',
        status: 'finished',
        createdAt: Date.now()-100000,
      },
    ],
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