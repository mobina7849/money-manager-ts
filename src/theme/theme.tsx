import { createTheme, PaletteMode } from "@mui/material";
import { amber,grey } from "@mui/material/colors";

// export const theme= createTheme({
//     palette:{
//         primary:{
//             main:'#000'
//         }
//     }
// })
export const getDesignTokens = (mode: string) =>createTheme({
    components:{
     
      
        MuiCssBaseline:{
          
            styleOverrides:{
                body:{
               
                  ...(mode==='dark'?
                  { background:'#000'}:{background:'#F3F5F7'}
                  )
                    
                }
            }
        },
    },
 
    palette: {
     
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary:{
                main:"#9c27b0",
                light:"#ba68c8",
                dark:"#7b1fa"
            },
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: grey,
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: '#000',
            },
          }),
    },
    typography:{
        fontFamily:'IRANSANS'
    }
  });
  