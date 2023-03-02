/* eslint-disable no-unused-vars */
import NavListDrawer from "./NavListDrawer";
import { AppBar, Box, Button, Drawer, IconButton, Toolbar , Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react";
import {NavLink} from 'react-router-dom'
export default function NavBar({navLinks}){

  const [open , setOpen] = useState(false)


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{display: {xs:"flex" , sm:"none"}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" sx={{flexGrow: 1}}>MenuBar</Typography>
          <Box sx={{display:{xs:"none" , sm:"flex"}}}>
            {
              navLinks.map(item => (
                <Button color="inherit" key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
              ))
            }
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer 
        open={open} 
        anchor="left" 
        onClose={() => setOpen(false)} 
        sx={{display:{xs:"flex" , sm:"none"}}}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer> 
    </>
  )
}