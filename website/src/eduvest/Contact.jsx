import { useState } from "react";

export const Contact = () => {
    const [hover, setHover] = useState(false);

    return (
        <>
            {/* =================CONTACT SECTION ================= */}
            <section className="container">
                <div className="grid grid-two-cols margin-top">
                    <div className="contact-section">
                        <img src="images/contact1.png" alt="contact-img" />
                        <div className="contact-content">
                            <h4>Still Questions? Talk To An Expert</h4>
                            <p>Our experts are here to help you make the right choice.</p>

                            <button
                                className="btn1"
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                {hover ? "Button" : "Contact Now"}
                            </button>
                        </div>
                    </div>

                    <div className="contact-section">
                        <img src="images/contact1.png" alt="contact-img" />
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
                    </div>
                </div>
            </section>
        </>
    )
}