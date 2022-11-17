import { PaletteMode, useMediaQuery } from "@mui/material";
import { createContext, ReactNode } from "react"
import { useState } from "react";
import * as React from 'react';
import { Dispatch } from "react";

  

export const ThemeContexts = createContext({
    mode:'light',
    setMode:(theme:string):void=>{}
})



export default function ThemeProviders({children}:{children:ReactNode})  {
   const [mode,setMode]=useState('light')

    return ( 
      <ThemeContexts.Provider value={{mode,setMode}}>
         {children}
      </ThemeContexts.Provider>
     );
}
 