export const Calculator = () => {

    const calculator = [
        {
            img: "/images/icon1.svg",
            name: "College cost",
            info: "Manage your college expenses by forecasting tuition, living costs, and inflation to ensure financial preparedness for higher education",
        },
        {
            img: "/images/icon2.svg",
            name: "SIP calculator",
            info: "Plan and optimize investments to achieve financial goals by estimating investment growth based on amount, frequency, and expected return",
        },
        {
            img: "/images/icon3.svg",
            name: "Step up SIP",
            info: "Project growth based on your initial contribution, yearly increases, and anticipated returns to reach your financial goals",
        },
        {
            img: "/images/icon4.svg",
            name: "Lumpsum",
            info: "Calculate potential returns on your lumpsum investments to maximise growth and achieve financial goals effectively	"
        },
        {
            img: "/images/icon5.svg",
            name: "Target Amount SIP",
            info: "Estimate the SIP amount needed to reach your target investment goal, factoring in growth potential and duration					"
        },
        {
            img: "/images/icon6.svg",
            name: "Education loan EMI",
            info: "Plan for your higher education expenses with accuracy using our tailored education loan calculator.	",
        },
        {
            img: "/images/icon7.svg",
            name: "Fixed Deposit",
            info: "Project your fixed deposit growth and ensure precise financial planning and growth projection	",
        },
    ]
    return (
        <>
            <section className="margin-top">
                <div className="container">
                    <div className="calculator-section ">
                    <nav className="breadcrumb">
                        <a href="/">Home</a>
                        <span>  &gt;  </span>
                        <span> Calculators </span>
                    </nav>

                    {/* search */}
                    <div className="searching-section">
                        <h2>Calculators</h2>
                        <input type="text" name="text" placeholder="Try searching for loans calculator" />
                    </div>
                    {/* calculator content */}
                    <div className="grid grid-three-cols">
                        {calculator.map((curElem, index) => {
                            const { img, name, info } = curElem;
                            return (
                                <div className="calculator" key={index}>
                                    <img src={img} alt="icon-img" />
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{info}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}