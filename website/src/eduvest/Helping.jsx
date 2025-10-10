import { useState } from "react";

export const Helping = () => {
    const [hover, setHover] = useState(false);
    return (
        <>
            {/* =================HERO SECTION  ================= */}
            <section className="container">
                <div className="helping-section margin-top" >
                    <img src="images/hero-section.png" alt="hero-section" />
                    <div className="helping-content">
                        <h6>Funding dreams, the smart way</h6>
                        <h3>Helping young parents plan their Child’s Future</h3>
                        <div className="booking">
                            <p>Enjoy 100% digital booking experience</p>
                            <img src="images/star-img.svg" alt="star-img" />
                            <p>₹5L insured by RBI's subsidiary DICGC</p>
                        </div>
                        <div className="button">
                            <button  className="btn1">Get Started</button>
                            <button  className="btn3">Book Workshop</button>
                          
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}