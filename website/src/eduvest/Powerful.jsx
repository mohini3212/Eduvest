import { LuChartColumn } from "react-icons/lu";
import { BsCalculator } from "react-icons/bs";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";

export const Powerful = () => {
    const educationPlan = [
        {
            img: <LuChartColumn />,
            name: "Wealth Insights Dashboard",
            details: "Track your child's total investments and net worth growth with intuitive visualizations and real-time updates.",
            
        },
        {
            img: <BsCalculator />,
            name: "Financial Calculators",
            details: "Goal-based, SIP, education cost calculators to plan the perfect investment strategy for your child's future.",
            
        },
        {
            img: <MdOutlineVideogameAsset /> ,
            name: "Gamified Learning",
            details: "Educational videos, financial quizzes, and reward points to make financial literacy fun and engaging.",
            
        },
        {
            img: <HiOutlineBolt />,
            name: "AI-Powered Strategy",
            details: "Our AI understands your goals and creates personalized investment strategies for education, marriage, and more.",
           
        },
    ]
    return (
        <>
            {/* =================EDUCATION SECTION  ================= */}
            <section className="margin-top margin">
                <div className="container ">
                    <div className="header">
                        <h3>Powerful Features for Smart Investing</h3>
                        <p>Our proven 4-step process helps parents create winning investment strategies for their children's financial future.</p>

              
                    </div>
                    <div className="grid grid-four-cols pt-4">
                        {educationPlan.map((curElem, index) => {
                            const { img, name, details} = curElem;
                            return (
                                // CARD
                                <div className="powerful" key={index}>
                                    <div className="powerful-info">
                                       {img}
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