import { useState } from "react";

export const TargetSip = () => {
    const [amount, setAmount] = useState({
        number: "",
        rate: "",
        year: "",

    })

    // final calculate amount
    const [result, setResult] = useState({
      
        requiredSip: 0,
    })

    // handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    }

    // handle calculate amount
    const handleCalculate = (event) => {
        event.preventDefault();

        const targetAmt = Number(amount.number);
        const Rate = Number(amount.rate);
        const Year = Number(amount.year);

        const r = Rate / (12 * 100)
        const n = Year * 12

        const denominatorValue =   (((1 + r) ** n) -1/ (1 + r))/r 
        const requiredSip =Math.round (targetAmt / denominatorValue)

        setResult({requiredSip});
           
        
        setAmount({ number: "", rate: "", year: "" });
    }



    return (
        <>
        <section className="margin-top">
                <div className="container">
            <div className="calculate calculator-section ">
                <form onSubmit={handleCalculate}>
                    <label htmlFor="number">Loan Amount (₹)</label>
                    <input type="number" name="number" value={amount.number || ""} onChange={handleInputChange} placeholder="Enter Amount" />
                    <label htmlFor="rate">Rate of Interest  (p.a)</label>
                    <input type="number" name="rate" value={amount.rate || ""} onChange={handleInputChange} placeholder="Enter Rate" />
                    <label htmlFor="year">Tenure of the Loan (in years)</label>
                    <input type="number" name="year" value={amount.year || ""} onChange={handleInputChange} placeholder="Enter Year" />

                    <button type="submit" className="btn1  mb-4">Invest Now </button>
                </form>

                <div className="calculated-info">
                    <p className="amount">
                        Required SIP <span>₹ {result.requiredSip}</span>
                    </p>
                   
                </div>
            </div>
             </div>
            </section>
        </>
    )
}