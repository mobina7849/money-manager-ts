import Header from "./Header";
import {Outlet} from "react-router-dom";

const Layout=():JSX.Element=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
};
export default Layout;