import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    // mobile menu
    const [showMenu, setShowMenu] = useState(false)

    const handleButtonToggle = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            {/* =================NAVBAR SECTION  ================= */}
            <header className="shadow-custom" >
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="images/logo-img2.svg" alt="logo-img" />
                            </NavLink>

                        </div>
                        {/* navbar */}
                        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                            <ul>
                                <NavLink to="/calculator">
                                    <li>About Us</li>
                                </NavLink>

                                <li><a href="#contact">Contact Us</a></li>


                                <button className="btn1" style={{ marginRight: "4rem" }}>Login</button>
                            </ul>
                        </nav>

                        {/* hamburger */}
                        <div className="ham-menu">
                            <button onClick={handleButtonToggle}>
                                <GiHamburgerMenu />
                            </button>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}