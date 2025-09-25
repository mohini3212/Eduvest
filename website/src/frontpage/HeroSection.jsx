export const HeroSection = () => {

    const child = [
        {
            dot_img: "/images/dot-img1.png",
            age: "Age 3",
            info: "Early Learning",
            fee: "₹50,000/year"
        },
        {
            dot_img: "/images/dot-img1.png",
            age: "Age 10",
            info: "Primary School",
            fee: "₹1,20,000/year"
        },
        {
            dot_img: "/images/dot-img1.png",
            age: "Age 16",
            info: "High School",
            fee: "₹2,50,000/year"
        },
        {
            dot_img: "/images/dot-img1.png",
            age: "Age 18",
            info: "College Prep",
            fee: "₹5,00,000/year"
        },
        {
            dot_img: "/images/dot-img1.png",
            age: "Age 22",
            info: "Graduate",
            fee: "Dream Achieved!"
        }
    ]
    return (
        <>

        {/* ================= HERO SECTION ================= */}
            <main className="margin-top" style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="grid grid-two-cols hero-section ">
                        <div>
                            <div className="star-section">
                                <img src="images/star-img.png" alt="star-img" />
                                <h6>Begin Your Child's Journey</h6>
                            </div>
                            <h1>Secure Their <span> Dreams</span> </h1>
                            <h3>Invest Early in Education</h3>
                            <p>Give your child the best start in life. Our story-driven approach makes financial planning for education simple, engaging, and effective.</p>
                            <button className="btn2">Enable Smart Notifications <img src="/images/Vector.png" alt="arrow-icon" /></button>
                        </div>

                        {/*Your Child's Growth Timeline */}
                        <div className="child-growth">
                            <div>
                                <h4>Your Child's Growth Timeline</h4>
                                <div>
                                    {child.map((curElem, index) => {
                                        const { dot_img, age, info, fee} = curElem;
                                        return (
                                            <div className="child-info" key={index}>
                                                <div className="flex">
                                                    <img src={dot_img} alt={dot_img} />
                                                    <div className="ms-4">
                                                        <h6>{age}</h6>
                                                        <p>{info}</p>
                                                    </div>
                                                </div>
                                                <h6>{fee}</h6>
                                            </div>
                                        )

                                    })}

                                    <div className="investing">
                                        <p>Start investing ₹5,000/month today</p>
                                        <h4>Save ₹25 Lakhs by graduation! 🎓</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}