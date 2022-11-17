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
    // components:{
     
      
    //     MuiCssBaseline:{
          
    //         styleOverrides:{
    //             body:{
               
    //               ...(mode==='dark'?
    //               { background:'#121212'}:{background:'#F3F5F7'}
    //               )
                    
    //             }
    //         }
    //     },
    // },
 
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
            divider:'rgba(255, 255, 255, 0.5)',
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: 'rgba(255, 255, 255, 0.7)',
              disabled:'rgba(255, 255, 255, 0.5)'
            },
          }),
    },
    typography:{
        fontFamily:'IRANSANS'
    }
  });
  