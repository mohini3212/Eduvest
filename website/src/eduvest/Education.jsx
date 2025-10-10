// 
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export const Education = () => {
    const [cardData, setCardData] = useState([])
    const [slide, setSlide] = useState(0)


    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 1)
    }
    const nextSlide = () => {
        if (cardData.length - 3 == slide) return false;
        setSlide(slide + 1)
    }
    const educationPlan = [
       {
            img: "/images/utkarsh1.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh2.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh3.svg",
            name: "Utkarsh SF Bank",
            details: "Instant Withdrawals",
            rate: "8.25 % ",
        },
        {
            img: "/images/utkarsh4.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "7.15 % ",
        },
        {
            img: "/images/utkarsh1.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh2.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        },
        {
            img: "/images/utkarsh3.svg",
            name: "Utkarsh SF Bank",
            details: "Instant Withdrawals",
            rate: "8.25 % ",
        },
        {
            img: "/images/utkarsh4.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "7.15 % ",
        },
         {
            img: "/images/utkarsh1.svg",
            name: "Utkarsh SF Bank",
            details: "30+ Lakh Cutomers",
            rate: "8.15 % ",
        }
    ]

    return (
        <>
            {/* =================EDUCATION SECTION  ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="heading-section">
                        <h3>Plan Your Child’s Education With Us</h3>

                        <div className="slider">
                            <p onClick={prevSlide} className={`btn ${slide === 0 ? "disabled" : ""}`}><IoIosArrowBack /></p>
                            <p onClick={nextSlide} className={`btn ${slide === cardData.length - 2 ? "disabled" : ""}`} > <IoIosArrowForward /></p>


                        </div>
                    </div>
                    <div className="d-flex overflow-hidden pt-4">
                        {educationPlan.map((curElem, index) => {
                            const { img, name, details, rate } = curElem;
                            return (
                                // CARD
                                <div className="education-plan" key={index} style={{ transform: `translatex(-${slide * 100}%)` }}>
                                    <div className="plan">
                                     <img src={img} alt="utkarsh-icon" />
                                        <div>
                                            <h6>{name}</h6>
                                            <p>{details}</p>
                                        </div>
                                    </div>
                                    <p>up to</p>
                                    <h4>{rate} <span>p.a.</span></h4>
                                    <button className="btn2">Book Now <FaArrowRight /></button>
                                </div>
                            )

                        })}
                    </div>


                </div>
            </section>
        </>
    )
}