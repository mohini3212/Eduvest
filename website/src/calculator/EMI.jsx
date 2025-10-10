import { useState } from "react";

export const EMI = () => {
    const [amount, setAmount] = useState({
        number: "",
        rate: "",
        year: "",

    })

    // final calculate amount
    const [result, setResult] = useState({
        emi: 0,
        totalPayment: 0,
        tensure: 0,
    })

    // handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    }

    // handle calculate amount
    const handleCalculate = (event) => {
        event.preventDefault();

        const loanAmt = Number(amount.number);
        const Rate = Number(amount.rate);
        const Year = Number(amount.year);

        const r = Rate / (12 * 100)
        const n = Year * 12

        const emi = loanAmt * r * ((1 + r) ** n) / ((1 + r) ** n - 1);
        const totalPayment = emi * n;
        const tensure = totalPayment - loanAmt;

        setResult({
            emi: Math.round(emi),
            totalPayment: Math.round(totalPayment),
            tensure: Math.round(tensure),
        });
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
                        EMI <span>₹ {result.emi}</span>
                    </p>
                    <p className="amount">
                        Total Payment Made over the Tenure <span>₹ {result.totalPayment}</span>
                    </p>
                    <p className="amount">Interest Over the Tenure <span>₹ {result.tensure}</span></p>




                </div>

            </div>
             </div>
            </section>
        </>
    )
}