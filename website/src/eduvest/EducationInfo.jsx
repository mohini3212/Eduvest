import { useState } from "react";

export const EducationInfo = () => {
     const [hover, setHover] = useState(false);
    return (
        <>
            {/* =================CHILD EDUCATION SECTION ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="grid grid-two-cols education-info">
                        <div >
                            <h3>The Cost of Your Child’s Education</h3>
                            <h3 style={{color:"#000",fontWeight:"700"}}>Will Double Every Eight Years <img src="images/increase 1.png" alt="increase-img" /></h3>

                            <div className="education-text">
                                <h4>A college degree that costs ₹25 lakhs today could cost nearly <span>₹1 crore in just 15 years.</span></h4>
                                <h6>How much will it really cost to put your child through college?</h6>
                                <button
                                    className="btn5"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    {hover ? "Button" : "Calculate Now"}
                                </button>
                                
                                <p>*As per an Economic Times survey, the cost of education increases by 10% every year.</p>
                            </div>
                        </div>
                        <div className="graph">
                            <img src="/images/graph.png" alt="graph-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}