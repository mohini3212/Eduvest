export const Action = () => {
    const actionCenter = [
        {
            icon: "/images/icon1.png",
            content: "Plan for Pre-School",
            info: "Early childhood education planning for ages 2-6",
            target_amount: "₹3-8 Lakhs",
            time: "5-12 years",
            includes: ["Nursery admissions", "Activity classes", "Learning materials"]
        },
        {
            icon: "/images/icon2.png",
            content: "Plan for K-12",
            info: "Primary and secondary education planning",
            target_amount: "₹15-18 Lakhs",
            time: "5-12 years",
            includes: ["School fees", "Books & uniforms", "Extra-curricular activities"]
        },
        {
            icon: "/images/icon3.png",
            content: "Plan for College",
            info: "Higher education and professional courses",
            target_amount: "₹25-80 Lakhs",
            time: "8-15 years",
            includes: ["Tuition fees", "Accommodation", "International options"]
        },
        {
            icon: "/images/icon4.png",
            content: "Plan for Pre-School",
            info: "Early childhood education planning for ages 2-6",
            target_amount: "₹3-10 Lakhs",
            time: "2-8 years",
            includes: ["Coding bootcamps", "Professional certifications", "Language courses"]
        },
    ]
    return (
        <>
            <section className="pb-4">

                <h2><span>Personalized</span> Action Center</h2>
                <p>Get tailored plans based on your child's age, aspirations, and your financial goals</p>
                <div className="grid grid-four-cols pt-4 ">
                    {actionCenter.map((curElem, index) => {
                        const { icon, content, info, target_amount, time, includes } = curElem;
                        return (
                            <div className="action" key={index}>
                                <div className="action-section">
                                    <img src={icon} alt="icon-img" />
                                    <h5>{content}</h5>
                                    <p>{info}</p>

                                </div>

                                <div className="target-amount">
                                    <p>Target Amount: </p>
                                    <h6>{target_amount}</h6>
                                </div>
                                <div className="target-amount">
                                    <p>Timeframe:</p>
                                    <h6>{time}</h6>
                                </div>
                                <div className="action-list">
                                    <p>Includes</p>
                                    <ul>
                                        <li>{includes[0]}</li>
                                        <li>{includes[1]}</li>
                                        <li>{includes[2]}</li>
                                    </ul>
                                </div>
                                <button className="btn2 w-100">Invest Now <img src="/images/Vector.png" alt="arrow-icon" /></button>
                            </div>
                        )

                    })}


                </div>

            </section>
        </>
    )
}
