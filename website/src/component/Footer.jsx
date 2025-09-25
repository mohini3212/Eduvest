import { easeInOut, motion } from "motion/react";
export const Footer = () => {
    const quick = [
        {
            "links": "Interactive Journey"
        },
        {
            "links": "Planning Tools"
        },
        {
            "links": "Learning Resources"
        },
        {
            "links": "Success Stories"
        },
        {
            "links": "Book Consultation"
        },

    ]

    const resources = [
        {
            "links": "Education Cost Calculator"
        },
        {
            "links": "Investment Guides"
        },
        {
            "links": "FAQ & Help Center"
        },
        {
            "links": "Download Mobile App"
        },
        {
            "links": "Expert Consultations"
        },


    ]

    const listVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            {/* =================FOOTER SECTION  ================= */}
            <footer className="margin-top">
                <div className="container">

                    <div className="grid grid-four-cols">
                        <div className="footer-content">
                            {/* eduvest logo*/}
                            <div className="footer-info">
                                <div className="footer-text">
                                    <img src="/images/logo.png" alt="footer-logo" />
                                    <h2>Eduvest</h2>
                                </div>
                                <p>Empowering parents to secure their children's educational dreams through smart financial planning and story-driven guidance.</p>
                                <div className="m-4 ms-0 me-0">
                                    <div className="footer-icon">
                                        <img src="/images/footer-icon1.png" alt="footer-icon" />
                                        <h6>+91 9876543210</h6>
                                    </div>
                                    <div className="footer-icon">
                                        <img src="/images/footer-icon2.png" alt="footer-icon" />
                                        <h6>hello@eduvest.com</h6>
                                    </div>
                                    <div className="footer-icon">
                                        <img src="/images/footer-icon3.png" alt="footer-icon" />
                                        <h6>Mumbai, Maharashtra, India</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-info">
                            <h5>Quick Links</h5>
                            <motion.ul
                                variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ staggerChildren: 0.15, ease: easeInOut }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                {quick.map((curElem, index) => (
                                    <motion.li key={index} variants={itemVariants}>
                                        {curElem.links}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                        {/*  */}

                        {/* Resources */}
                        <div className="footer-info">
                            <h5>Resources</h5>
                            <motion.ul
                                variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ staggerChildren: 0.17, ease: easeInOut }}
                                viewport={{ once: false, amount: 0.2 }}>
                                {resources.map((curElem, index) => {
                                    const { links } = curElem;
                                    return <motion.li key={index} variants={itemVariants}>
                                        {links}
                                    </motion.li>
                                })}
                            </motion.ul>

                        </div>


                        {/*Stay Updated */}
                        <div className="footer-info">
                            <h5>Stay Updated</h5>
                            <p>Get tips for your child's financial future delivered to your inbox</p>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your Email" />
                                <button className="btn4"><img src="/images/Vector.png" alt="arrow-icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/*copy right  */}
                <div className="custom-border margin-top">
                    <div className="container">
                        <div className="footer-bottom grid-two-colscontainer">
                            <p>© 2024 Eduvest. All rights reserved. | Made with ❤️ for Indian families</p>
                            <ul>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Cookie Policy</a></li>
                                <li><a href="">Disclaimer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}