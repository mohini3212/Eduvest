import { easeInOut, motion } from "motion/react";
export const Footer = () => {
    const quick = [
        {
            "links": "Privacy Policy"
        },
        {
            "links": "Cookies Notice"
        },
        {
            "links": "Security"
        },
        {
            "links": "Terms & Conditions"
        },


    ]

    const resources = [
        {
            "links": "What we Do"
        },
        {
            "links": "About Us"
        },
        {
            "links": "Why Join Us"
        },
        {
            "links": "Contact Us"
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
            <footer className="container">
                <div className="footer">
                    <div className="grid grid-two-cols footer-links">
                        <div>
                            <div className="footer-content">
                                {/* eduvest logo*/}
                                <div >
                                    <div className="footer-text">
                                        <img src="images/logo3.png" alt="footer-logo" />
                                        <img src="images/logo-name.png" alt="logo-name" />
                                    </div>

                                    <div className="">
                                        <div className="footer-icon">
                                            <img src="images/footer-icon1.png" alt="icon-img" />
                                            <img src="images/footer-icon2.png" alt="icon-img" />
                                            <img src="images/footer-icon3.png" alt="icon-img" />
                                            <img src="images/footer-icon4.png" alt="icon-img" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Quick Links */}
                        <div className="footer-info ">
                        <div >
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
                        <div >
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
                        <div >
                            <h5>Contact</h5>
                            <div >
                                <div className="contact-info mb-4">
                                    <img src="images/footer-icon5.png" alt="icon-img" />
                                    <h6>hello@eduvest.in</h6>
                                </div>
                                <div className="contact-info">
                                    <img src="images/footer-icon6.png" alt="icon-img" />
                                    <h6> #7 - 5707 Sidley <br />
                                        St. Burnaby , BC</h6>

                                </div>
                            </div>
                        </div>
                    </div>
</div>
                    {/*copy right  */}
                    <div className="custom-border">
                        <div className="">
                            <p>© 2025 EduVest</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}