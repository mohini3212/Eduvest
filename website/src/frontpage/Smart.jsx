import { Action } from "./Action";

export const Smart = () => {
    const milestones = [
        {
            dot_img: "/images/dot-img.png",
            content: "Child turns 3",
            info: "Start education fund",
            btn_icon: "/images/btn-icon.png"

        },
        {
            dot_img: "/images/dot-img.png",
            content: "School admission",
            info: "Review investment portfolio",
            btn_icon: "/images/btn-icon.png"

        },
        {
            dot_img: "/images/dot-img.png",
            content: "Class 10 completion",
            info: "Plan for higher education",
            btn_icon: "/images/btn-icon.png"

        },
        {
            dot_img: "/images/dot-img.png",
            content: "College application",
            info: "Evaluate fund adequacy",
            btn_icon: "/images/btn-icon.png"

        },

    ];
    return (
        <>
           
            <section className=" bg-color">
                <div className="container">
                     {/* =================ACTION CENTER  ================= */}
                    <Action />
                     {/* =================SMART REMINDERS  ================= */}
                    <div className="milestones">
                        <h2>Smart Reminders & Milestones</h2>
                        <p>Stay on track with personalized notifications for important financial milestones</p>
                        <div className="grid grid-four-cols pt-4">
                            {milestones.map((curElem, index) => {
                                const { dot_img, content, info, btn_icon } = curElem;
                                return (
                                    <div className="milestones-section" key={index}>
                                        <img src={dot_img} alt={dot_img} />
                                        <h5>{content}</h5>
                                        <p>{info}</p>
                                        <button className="btn3"> <img src={btn_icon} alt={btn_icon} /> Set Reminder</button>

                                    </div>
                                )

                            })}
                        </div>

                        {/* never miss a milestones */}
                        <div className="never-miss">
                            <h5>Never Miss a Milestone </h5>
                            <p>Get personalized reminders based on your child's age and goals</p>
                            <button className="btn2">Enable Smart Notifications <img src="/images/Vector.png" alt="arrow-icon" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}