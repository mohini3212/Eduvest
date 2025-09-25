import { useState } from "react"

export const Calculate = () => {
    const [amount, setAmount] = useState({
        number: "",
        rate: "",
        year: "",

    })

    // final calculate amount
    const [result, setResult] = useState({
        invested: 0,
        returns: 0,
        total: 0,
    })

    // handleInputChange
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAmount((prev) => ({ ...prev, [name]: value }))
    }

    // handle Calculate Amount
    const handleCalculate = (event) => {
        event.preventDefault();

        const Deposit = Number(amount.number);
        const Rate = Number(amount.rate);
        const Year = Number(amount.year);

        const invested = Math.round(Deposit);
        const returns = Math.round(((Deposit) * Rate / 100) * Year);
        const total = Math.round(invested + returns);

        setResult({ invested, returns, total });
        // for input box empty
        setAmount({ number: "", rate: "", year: "" });
    }

    return (
        <>
            {/* =================CALCULATE FINANCIAL JOURNEY  ================= */}
            <section>
                <div className="container">
                    <div className="grid grid-two-cols financial-journey">
                        <div>
                            <h2><span>Calculate</span> Fixed Deposit</h2>
                            <p>See what's possible with your investment</p>

                            <div className="calculate">
                                <form onSubmit={handleCalculate}>
                                    <label htmlFor="number">Deposit Amount (₹)</label>
                                    <input type="number" name="number" value={amount.number || ""} onChange={handleInputChange} placeholder="Enter Amount" />
                                    <label htmlFor="rate">Interest Rate  (%)</label>
                                    <input type="number" name="rate" value={amount.rate || ""} onChange={handleInputChange} placeholder="Enter Rate" />
                                    <label htmlFor="year">Tenure (years)</label>
                                    <input type="number" name="year" value={amount.year || ""} onChange={handleInputChange} placeholder="Enter Year" />

                                       <button type="submit"  className="btn2 w-100 mb-4">Invest Now <img src="/images/Vector.png" alt="arrow-icon" /></button>
                                </form>

                                <div className="calculated-info">
                                    <p className="amount">
                                        Invested Amount: <span>₹ {result.invested}</span>
                                    </p>
                                    <p className="amount">
                                        Estimated Returns: <span>₹ {result.returns}</span>
                                    </p>
                                    <p className="amount">
                                        Total Amount: <span>₹ {result.total}</span>
                                    </p>
                                </div>
                             
                            </div>
                        </div>

                        <div className="calculate-img">
                            <img src="images/financial-journey.png" alt="journey" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}