
import { Navbar } from "./Navbar";
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom";


export const AppLayout = () => {
    return (
        <>
      <Navbar/>
            <Outlet />
            <Footer />
        </>
    )
}