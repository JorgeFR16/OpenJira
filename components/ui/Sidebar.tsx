import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

import { UIContext } from '@/context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {


    const { sidemenuOpen, closeSideMenu } = useContext( UIContext )


  return (
    <Drawer
        anchor="left"
        open={ sidemenuOpen }
        onClose={ closeSideMenu }    
    >
        <Box sx={{ padding: '5px 10px' }}>
            <Box sx={{ padding:'5px 10px' }}>
                <Typography variant="h4">Menú</Typography>
            </Box>
            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItemButton  key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxIcon />: <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItemButton>
                    ) )
                }
            </List> 
            <Divider />
            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItemButton  key={ text }>
                            <ListItemIcon>
                                { index % 2 ? <InboxIcon />: <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={ text }/>
                        </ListItemButton>
                    ) )
                }
            </List> 
        </Box>
    </Drawer>
  )
}
