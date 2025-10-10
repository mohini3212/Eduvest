import { RiGraduationCapLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaBullseye } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Calculator = () => {

    const calculator = [
        {
            img: <RiGraduationCapLine />,
            name: "College cost",
            info: "Manage your college expenses by forecasting tuition, living costs, and inflation to ensure financial preparedness for higher education",
        },
        {
            img: <AiOutlineBarChart />,
            name: "SIP calculator",
            info: "Plan and optimize investments to achieve financial goals by estimating investment growth based on amount, frequency, and expected return",
             path: "/sip",
        },
        {
            img: <FaChartLine />,
            name: "Step up SIP",
            info: "Project growth based on your initial contribution, yearly increases, and anticipated returns to reach your financial goals",
            path: "/stepsip",
        },
       
        {
            img: <GiTakeMyMoney />,
            name: "Lumpsum",
            info: "Calculate potential returns on your lumpsum investments to maximise growth and achieve financial goals effectively	",
            path: "/lumpum",
        },
        {
            img: <FaBullseye />,
            name: "Target Amount SIP",
            info: "Estimate the SIP amount needed to reach your target investment goal, factoring in growth potential and duration	",
            path: "/target"
        },
        {
            img: <FaUniversity />,
            name: "Education loan EMI",
            info: "Plan for your higher education expenses with accuracy using our tailored education loan calculator.	",
            path: "/emi"
        },
        {
            img: <FaPiggyBank />,
            name: "Fixed Deposit",
            info: "Project your fixed deposit growth and ensure precise financial planning and growth projection	",
            path: "/educationloan"
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
                                    <NavLink to={curElem.path}>
                                    <div className="calculator-info">
                                      {img}
                                    <div>
                                        <h5>{name}</h5>
                                        <p>{info}</p>
                                    </div>  
                                    </div>
                                    </NavLink>
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