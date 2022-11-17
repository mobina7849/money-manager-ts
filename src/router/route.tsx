import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import AddMoney from "../pages/addMoney";
import Charts from "../pages/Charts";
import Layout from "../Components/layout/Layout";


export const Route = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'/addMoney',
                element: <AddMoney/>
            },
            {
                path:'update/:UpdateID',
                element: <AddMoney/>
            },
            {
                path:'/charts',
                element: <Charts/>
            }
        ]
        
    }
])


