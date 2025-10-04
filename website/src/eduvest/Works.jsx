export const Works = () => {
    const educationPlan = [
        {
            img: "/images/work-icon1.svg",
            name: "Workshop at Schools & Colleges",
            details: "Our SEBI registered advisors conduct wealth creation workshops at educational institutions across India.",
            
        },
        {
            img: "/images/work-icon2.svg",
            name: "Onboard Parents & Students",
            details: "During workshops, we onboard parents and students onto our AI-powered wealth tech platform.",
            
        },
        {
            img: "/images/work-icon3.svg",
            name: "AI-Powered Goal Setting",
            details: "Our AI understands your child's future goals - education abroad, marriage, home buying, and creates personalized strategies.",
            
        },
        {
            img: "/images/work-icon4.svg",
            name: "Start Smart Investing",
            details: "Begin investing in Fixed Deposits and Mutual Funds with zero platform fees and expert guidance.",
           
        },
    ]
    return (
        <>
            {/* =================EDUCATION SECTION  ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="header">
                        <h3>How EduVest Works</h3>
                        <p>Our proven 4-step process helps parents create winning investment strategies for their children's financial future.</p>

              
                    </div>
                    <div className="grid grid-four-cols pt-4">
                        {educationPlan.map((curElem, index) => {
                            const { img, name, details} = curElem;
                            return (
                                // CARD
                                <div className="work-info" key={index}>
                                    <div className="works">
                                        <img src={img} alt="work-icon" />
                                        <div>
                                            <h6>{name}</h6>
                                            <p>{details}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            )

                        })}
                    </div>


                </div>
            </section>
        </>
    )
}