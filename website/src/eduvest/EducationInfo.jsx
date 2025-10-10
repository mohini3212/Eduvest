import { useState } from "react";
// import { Graph } from "./Graph";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const EducationInfo = () => {
    

      const data = {
    labels: ["Current", "2030*", "2040*", "2050*"],
    datasets: [
      {
        label: "MBA",
        data: [405, 460, 470, 495],
        borderColor: "#FF6A00",
        backgroundColor: "#FF6A00",
        tension: 0.4,
      },
      {
        label: "BTech/Engg",
        data: [405, 445, 450, 460],
        borderColor: "#FFB366",
        backgroundColor: "#FFB366",
        tension: 0.4,
      },
      {
        label: "MBBS",
        data: [405, 430, 440, 445],
        borderColor: "#8B4513",
        backgroundColor: "#8B4513",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Success Prediction",
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 300,
        max: 600,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };
    return (
        <>
            {/* =================CHILD EDUCATION SECTION ================= */}
            <section className="margin-top">
                <div className="container">
                    <div className="grid grid-two-cols education-info">
                        <div >
                            <h3>The Cost of Your Child’s Education</h3>
                            <h3 style={{ color: "#000", fontWeight: "700" }}>Will Double Every Eight Years <img src="images/increase 1.svg" alt="increase-img" /></h3>

                            <div className="education-text">
                                <h4>A college degree that costs ₹25 lakhs today could cost nearly <span>₹1 crore in just 15 years.</span></h4>
                                <h6>How much will it really cost to put your child through college?</h6>

                                <button className="btn1">Calculate Now</button>

                                <p>*As per an Economic Times survey, the cost of education increases by 10% every year.</p>
                            </div>
                        </div>
                        
                        {/* graph */}
                        <div className="graph">
                            <Line data={data} options={options} />;
                        </div>
                          {/* <Graph/> */}
                    </div>
                </div>
            </section>
        </>
    )
}