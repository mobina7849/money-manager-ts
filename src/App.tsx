import { createTheme } from '@mui/material';
import { Button } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import React, { useMemo, useState } from 'react';
import {RouterProvider} from 'react-router-dom'
import { Route } from './router/route';
import { getDesignTokens } from './theme/theme';
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  //normal darkmode
  //const [mode,setMode]=useState<PaletteMode>('light')
  //const darkMode=useMemo(()=>createTheme(getDesignTokens(mode)),[mode])
  ////////////////////////////////////////
  //with system theme changes
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );
  const theme = getDesignTokens(darkMode);
  return (
    <ThemeProvider theme={theme}>
           <RouterProvider router={Route}/>
           <Button variant='contained' onClick={()=>setDarkMode(old=>old==='light'?'dark':'light')}>mode</Button>
    </ThemeProvider>
  );
}

export default App;
