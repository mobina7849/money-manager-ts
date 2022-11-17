import {ThemeProvider} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {Route} from "./router/route";
import {Provider} from 'react-redux'
import {store} from "./redux/store";
import { Button } from '@mui/material';
import { PaletteMode } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import { getDesignTokens } from './theme/theme';
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from '@mui/material';
import { ThemeContexts } from "./context/ColorProvider";
import ColorContextProvider from "./context/ColorProvider";

function App() {
  const {mode,setMode}=useContext(ThemeContexts)
  console.log(mode)
      //normal darkmode
  //const [mode,setMode]=useState<PaletteMode>('light')
  //const darkMode=useMemo(()=>createTheme(getDesignTokens(mode)),[mode])
  ////////////////////////////////////////
  //with system theme changes
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const [darkMode, setDarkMode] = useState<PaletteMode>(
  //   prefersDarkMode ? "dark" : "light"
  // );
//  const ColorModeContext = React.createContext<PaletteMode | null>(null);

//   const [mode, setMode] = React.useState<PaletteMode>('light');
//   const colorMode = React.useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode: PaletteMode) =>
//           prevMode === 'light' ? 'dark' : 'light',
//         );
//       },
//     }),
//     [],
//   );
   const theme = getDesignTokens(mode);
//   const theme = React.useMemo(() => getDesignTokens(mode), [mode]);

    return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
           <RouterProvider router={Route} />
           <Button variant='contained' onClick={()=>setMode(mode==='dark'?'light':'dark')}>mode</Button>
       </ThemeProvider>
    </Provider>
 

    )
}

export default App;
