import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";


export const Route=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/addMony',
        element:null
    },
])