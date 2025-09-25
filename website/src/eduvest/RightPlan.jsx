import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const RightPlan = () => {

    return (
        <>
            {/* =================RIGHT PLAN SECTION  ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="heading-section">
                        <h3>The Right Plan for Every Situation</h3>
                        <div className="slider">
                            <IoIosArrowBack />
                            <IoIosArrowForward />

                        </div>
                    </div>

                    <div className="grid grid-two-cols">
                        <div className="right-plan">
                            <p>At EduVest, we understand no two dreams are alike. So why should their planning be alike? That’s why we help you choose the right financial plan for your child’s journey- from dream to degree.</p>
                            <h6>Vivek, Delhi</h6>
                        </div>
                        <div className="right-plan">
                            <p>At EduVest, we understand no two dreams are alike. So why should their planning be alike? That’s why we help you choose the right financial plan for your child’s journey- from dream to degree.</p>
                            <h6>Vivek, Delhi</h6>
                        </div>
                    </div>

                    {/* contact */}
                    <div className="contact-section margin-top">
                        <img src="images/contact.png" alt="contact-img" />
                    </div>

                </div>
            </section>
        </>
    )
}