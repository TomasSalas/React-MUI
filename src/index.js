import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';
import {BrowserRouter} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette:{
    mode: 'light',
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#b500d6'
    },
    background: {
      default: '#fff',
      paper:"#fff"
    }
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <CssBaseline />
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);