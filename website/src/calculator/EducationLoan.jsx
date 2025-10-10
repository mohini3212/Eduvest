import { useState } from "react";

export const EducationLoan = () => {
  const [amount, setAmount] = useState({
        number: "",
        rate: "",
        year: "",

    })

     // final calculate amount
    const [result, setResult] = useState({
        investment: 0,
           total: 0,
    })

  // handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    }

// handle calculate amount
const handleCalculate = (event)=>{
event.preventDefault();

const InvestAmt = Number(amount.number);
const Rate = Number(amount.rate);
const Year = Number(amount.year);


const investment = Math.round(InvestAmt * Math.pow(1+(Rate/4)/100 ,(4*Year)))
 const total = Math.round(investment - InvestAmt);

setResult({ investment , total });
        // for input box empty
        setAmount({ number: "", rate: "", year: "" });
}

        return (
        <>
        <section className="margin-top">
                <div className="container">
            <div className="calculate calculator-section ">
                <form onSubmit={handleCalculate}>
                    <label htmlFor="number">Investment Amount (₹)</label>
                    <input type="number" name="number" value={amount.number || ""} onChange={handleInputChange} placeholder="Enter Amount" />
                    <label htmlFor="rate">Rate of Interest  (p.a)</label>
                    <input type="number" name="rate" value={amount.rate || ""} onChange={handleInputChange} placeholder="Enter Rate" />
                    <label htmlFor="year">Time Horizon (in years)</label>
                    <input type="number" name="year" value={amount.year || ""} onChange={handleInputChange} placeholder="Enter Year" />

                    <button type="submit" className="btn1  mb-4">Invest Now </button>
                </form>

                <div className="calculated-info">
                    <p className="amount">
                        Value at the End: <span>₹ {result.investment}</span>
                    </p>
                    <p className="amount">
                        Total Interest Earned: <span>₹ {result.total}</span>
                    </p>

                </div>

            </div>
             </div>
            </section>
        </>
    )
}


