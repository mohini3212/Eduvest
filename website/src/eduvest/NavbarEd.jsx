import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const NavbarEd = () => {
    // mobile menu
    const [showMenu, setShowMenu] = useState(false)
    const [hover, setHover] = useState(false);
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
                            <img src="images/logo-img2.png" alt="logo-img" />
                        </div>
                        {/* navbar */}
                        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                {/* <button className="btn1">Login</button> */}
                                <button
                                    className="btn5"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    {hover ? "Sign In" : "Login"}
                                  
                                </button>
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