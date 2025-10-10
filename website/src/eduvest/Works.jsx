import { RiGraduationCapLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { HiArrowTrendingUp } from "react-icons/hi2";

export const Works = () => {
    
    const educationPlan = [
        {
           img: <RiGraduationCapLine />,
            name: "Workshop at Schools & Colleges",
            details: "Our SEBI registered advisors conduct wealth creation workshops at educational institutions across India.",
            
        },
        {
          img: <FiUsers />,
            name: "Onboard Parents & Students",
            details: "During workshops, we onboard parents and students onto our AI-powered wealth tech platform.",
            
        },
        {
             img: <LuBrain />,
            name: "AI-Powered Goal Setting",
            details: "Our AI understands your child's future goals - education abroad, marriage, home buying, and creates personalized strategies.",
            
        },
        {
            img: <HiArrowTrendingUp />,
            name: "Start Smart Investing",
            details: "Begin investing in Fixed Deposits and Mutual Funds with zero platform fees and expert guidance.",
           
        },
        
    ]
    return (
        <>
            {/* =================EDUCATION SECTION  ================= */}
            <section className="margin-top margin">
                <div className="container">
                    <div className="header">
                        <h3>How EduVest Works</h3>
                        <p>Our proven 4-step process helps parents create winning investment strategies for their children's financial future.</p>

              
                    </div>
                    <div className="grid grid-four-cols pt-4 ">
                        {educationPlan.map((curElem, index) => {
                            const { img, name, details} = curElem;
                            return (
                                // CARD
                                <div className="work-info" key={index}>
                                    <div className="works">
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