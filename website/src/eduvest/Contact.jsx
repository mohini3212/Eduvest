import { useState } from "react";

export const Contact = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
        {/* =================CONTACT SECTION ================= */}
            <section className="container">
                <div className="contact-section">
                    <div className="contact-container grid grid-two-cols">

                        <div className="contact-content">
                            <h3>Still Questions? Talk To An Expert</h3>
                            <p>Our experts are here to help you make the right choice.</p>

                            <button
                                className="btn1"
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                {hover ? "Button" : "Contact Now"}
                            </button>
                        </div>

                        <div >
                            <img src="images/contact3.png" alt="Expert Person" />
                        </div>
                    </div>

                    <img src="images/contact1.png" className="contact-wave" alt="Wave" />
                    <img src="images/contact-star3.png" alt="star" className="star star-1" />
                    <img src="images/contact-star3.png" alt="star" className="star star-2" />
                    <img src="images/contact-star4.png" alt="star" className="star star-3" />

                </div>
            </section>

            {/*  */}
        </>
    )
}