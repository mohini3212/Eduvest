import { useState } from "react";

export const SIP = () => {
    const [amount, setAmount] = useState({
        number: "",
        rate: "",
        year: "",

    })

    // final calculate amount
    const [result, setResult] = useState({
        invested: 0,
        estimate: 0,
        totalValue: 0,

    })

    // handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    }

    // handle calculate amount
    const handleCalculate = (event) => {
        event.preventDefault();

        const Investment = Number(amount.number);
        const Rate = Number(amount.rate);
        const Year = Number(amount.year);

        const r = Rate / (12 * 100)
        const n = Year * 12

        const invested = Math.round(Investment * n)
      const fv =Math.round (Investment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r))
      const estimate = Math.round (fv-invested)
        const totalValue = Math.round(invested + estimate)

        setResult({ invested,  estimate, totalValue });
        // for input box empty
        setAmount({ number: "", rate: "", year: "" });
    }

    return (
        <>
        <section className="margin-top">
                <div className="container">
            <div className="calculate calculator-section">
                <form onSubmit={handleCalculate}>
                    <label htmlFor="number">Investment Amount (₹)</label>
                    <input type="number" name="number" value={amount.number || ""} onChange={handleInputChange} placeholder="Enter Amount" />
                    <label htmlFor="rate">Expected Rate of Return (p.a.)</label>
                    <input type="number" name="rate" value={amount.rate || ""} onChange={handleInputChange} placeholder="Enter Rate" />
                    <label htmlFor="year">Investment Duration (years)</label>
                    <input type="number" name="year" value={amount.year || ""} onChange={handleInputChange} placeholder="Enter Year" />

                    <button type="submit" className="btn1  mb-4">Invest Now </button>
                </form>

                <div className="calculated-info">
                    <p className="amount">
                        Invested Amount (₹) <span>₹ {result.invested}</span>
                    </p>
                    <p className="amount">
                        Est. Returns <span>₹ {result.estimate}</span>
                    </p>
                    <p className="amount">
                        Total Value <span>₹ {result.totalValue}</span>
                    </p>
                </div>

            </div>
            </div>
            </section>
        </>
    )
}