import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Navbar = () => {
    //  mobile menu
    const [showMenu, setShowMenu] = useState(false)

    const handleButtonToggle = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            {/* ================= NAVBAR SECTION ================= */}

            <header className="shadow-custom" >
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src="images/logo-img.png" alt="logo-img" />
                        </div>
                        {/*  Navigation Menu */}
                        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="">Action Center</a></li>
                                <li><a href="">Literacy Hub</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#contact">Contact Us</a></li>


                                <div className="contant-section">
                                    <ul><li><a href="">Sign In</a></li></ul>
                                    <button className="btn1">Book Consultation<img src="/images/Vector.png" alt="arrow-icon" /></button>

                                </div>
                            </ul>
                        </nav>

                        {/*  Hamburger Menu (Mobile Only) */}
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