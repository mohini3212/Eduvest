
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom";


export const AppLayout = () => {
    return (
        <>
      
            <Outlet />
            <Footer />
        </>
    )
}