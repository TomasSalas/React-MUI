/* eslint-disable no-unused-vars */
import { Box, Divider, List, ListItem, ListItemButton, ListItemText , ListItemIcon} from "@mui/material";
import {NavLink} from 'react-router-dom'
export default function NavListDrawer({navLinks , setOpen}) {
  return (
    <>
      <Box sx={{ width: 250 }}>
        <Divider />
        <nav>
          <List>
            {
              navLinks.map(item => (
                <ListItem disablePadding key={item.title}>
                  <ListItemButton component={NavLink} to={item.path} onClick={()=> setOpen(false)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
        </nav>
      </Box>
    </>
  )
}