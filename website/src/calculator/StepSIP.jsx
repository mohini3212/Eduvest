// import { useState } from "react";

// export const StepSIP = () => {
//     const [amount, setAmount] = useState({
//         number: "",
//         rate: "",
//         increase:"",
//         year: "",

//     })

//     // final calculate amount
//     const [result, setResult] = useState({
//         invested: 0,
//         totalValue: 0,
//         estimate: 0,
//     })

//     // handleInputChange
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setAmount((prev) => ({ ...prev, [name]: value }))
//     }

//     // handle calculate amount
//     const handleCalculate = (event) => {
//         event.preventDefault();

//         const Investment = Number(amount.number);
//         const Rate = Number(amount.rate);
//         const Year = Number(amount.year);


//         const invested = Math.round(Investment)
//         const totalValue = Math.round(Investment * Math.pow((1 + Rate / 100), Year));
//         const estimate = Math.round(totalValue - invested)

//         setResult({ invested, totalValue, estimate });
//         // for input box empty
//         setAmount({ number: "", rate: "", year: "" });
//     }

//     return (
//         <>
//             <div className="calculate">
//                 <form onSubmit={handleCalculate}>
//                     <label htmlFor="number">Initial Monthly Investment</label>
//                     <input type="number" name="number" value={amount.number || ""} onChange={handleInputChange} placeholder="Enter Amount" />
//                     <label htmlFor="rate">Expected Rate of Return (p.a.)</label>
//                     <input type="number" name="rate" value={amount.rate || ""} onChange={handleInputChange} placeholder="Enter Rate" />
//                     <label htmlFor="increase">Annual Increase (%)</label>
//                     <input type="number" name="increase" value={amount.increase || ""} onChange={handleInputChange} placeholder="Enter Year" />
//                     <label htmlFor="year">Investment Duration (years)</label>
//                     <input type="number" name="year" value={amount.year || ""} onChange={handleInputChange} placeholder="Enter Year" />


//                     <button type="submit" className="btn1  mb-4">Invest Now </button>
//                 </form>

//                 <div className="calculated-info">
//                     <p className="amount">
//                         Invested Amount (₹) <span>₹ {result.invested}</span>
//                     </p>
//                     <p className="amount">
//                         Est. Returns <span>₹ {result.estimate}</span>
//                     </p>
//                     <p className="amount">
//                         Total Value <span>₹ {result.totalValue}</span>
//                     </p>
//                 </div>

//             </div>
//         </>
//     )
// }

import { useState } from "react";

export const StepSIP = () => {
  const [amount, setAmount] = useState({
    sip: "",
    rate: "",
    stepUp: "",
    years: "",
  });

  const [result, setResult] = useState({
    invested: 0,
    returns: 0,
    total: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmount((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const P = Number(amount.sip);
    const annualRate = Number(amount.rate);
    const annualStepUp = Number(amount.stepUp);
    const years = Number(amount.years);

    const r = annualRate / 100 / 12; 
    const g = annualStepUp / 100; 
    const n = years * 12; 

    let totalValue = 0;

    // yearly loop for step-up SIP
    for (let k = 0; k < years; k++) {
      const sipYear = P * Math.pow(1 + g, k);
      // FV of SIP for 12 months of that year (annuity due)
      const yearlyFV = sipYear * ((Math.pow(1 + r, 12) - 1) / r) * (1 + r);
      // compound that year’s FV to the end
      totalValue += yearlyFV * Math.pow(1 + r, 12 * (years - k - 1));
    }

   

    // total invested (geometric series)
    const invested = 12 * P * ((Math.pow(1 + g, years) - 1) / g);
    const total = Math.round(totalValue);
    const returns = Math.round(total - invested);

    setResult({
      invested: Math.round(invested),
      returns,
      total,
    });
  };

  return (
    <section className="margin-top">
                <div className="container">
    <div className="calculate calculator-section ">
      <form onSubmit={handleCalculate}>
        <label htmlFor="sip">Initial Monthly Investment (₹)</label>
        <input
          type="number"
          name="sip"
          value={amount.sip}
          onChange={handleChange}
          placeholder="Enter amount"
        />

        <label htmlFor="rate">Expected Annual Return (%)</label>
        <input
          type="number"
          name="rate"
          value={amount.rate}
          onChange={handleChange}
          placeholder="Enter rate"
        />

        <label htmlFor="stepUp">Annual Step-Up Increase (%)</label>
        <input
          type="number"
          name="stepUp"
          value={amount.stepUp}
          onChange={handleChange}
          placeholder="Enter annual increase %"
        />

        <label htmlFor="years">Investment Duration (years)</label>
        <input
          type="number"
          name="years"
          value={amount.years}
          onChange={handleChange}
          placeholder="Enter years"
        />

        <button type="submit" className="btn1">Calculate</button>
      </form>

      <div className="calculated-info">
        <p>Invested Amount: ₹ {result.invested}</p>
        <p>Estimated Returns: ₹ {result.returns}</p>
        <p>Total Value: ₹ {result.total}</p>
      </div>
    </div>
     </div>
            </section>
  );
};
