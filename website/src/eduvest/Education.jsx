import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Education = () => {
    const educationPlan = [
        {
            img: "/images/utkarsh1.png",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh2.png",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh3.png",
            name: "Utkarsh SF Bank",
            details: "Instant Withdrawals",
            rate: "8.25 % ",
        },
        {
            img: "/images/utkarsh4.png",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "7.15 % ",
        },
    ]
    return (
        <>
            {/* =================EDUCATION SECTION  ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="heading-section">
                        <h3>Plan Your Child’s Education With Us</h3>

                        <div className="slider">
                            <IoIosArrowBack />
                            <IoIosArrowForward />

                        </div>
                    </div>
                    <div className="grid grid-four-cols pt-4">
                        {educationPlan.map((curElem, index) => {
                            const { img, name, details, rate } = curElem;
                            return (
                                // CARD
                                <div className="education-plan" key={index}>
                                    <div className="plan">
                                        <img src={img} alt="utkarsh-icon" />
                                        <div>
                                            <h6>{name}</h6>
                                            <p>{details}</p>
                                        </div>
                                    </div>
                                    <p>up to</p>
                                    <h4>{rate} <span>p.a.</span></h4>
                                    <button className="btn6">Book Now <FaArrowRight /></button>
                                </div>
                            )

                        })}
                    </div>


                </div>
            </section>
        </>
    )
}