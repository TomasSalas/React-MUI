import { Alert, AlertTitle, Button, Snackbar } from "@mui/material";
import { useState } from "react";
export default function Home(){
  const [open , setOpen] = useState(false)
  return (
    <> 
      <h1>Home</h1>
      <Button onClick={() => {setOpen(true)}}>Open Alert</Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => {setOpen(true)}}>
        <Alert severity="success">
          <AlertTitle>Ingreso Correcto</AlertTitle>
          Usuario agregado correctamente
        </Alert>
      </Snackbar>
    </>
  )
}