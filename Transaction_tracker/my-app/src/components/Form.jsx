import React from "react";
import { useState } from "react";
import "./transaction.css";
function Form() {

    const [inputData, setinputdata] = useState({
        Description: "",
        Amount: "",
        Type: "",
        PaymentMethod: ""
    });

    function HandleChange(event) {
        const { name, value } = event.target;
        // const name=event.target;
        // console.log(event.target.value);
        setinputdata((prevVal) => {
            return { ...prevVal, [name]: value };
        })
        // console.log(process.env.SERVER_PORT);
    }

    
    return (
        <div className="form-container">
            <form action="http://localhost:4000/transaction" className="transaction-form" method="post"  >
                <div className="form-field">
                    <label>Description</label>
                    <input className="input" onChange={HandleChange} type="text" name="Description" value={inputData.Description} placeholder="Description" required />
                </div>
                <div className="form-field">
                    <label>Amount</label>
                    <input className="input" onChange={HandleChange} type="number" name="Amount" value={inputData.Amount} placeholder="Amount" required />
                </div>
                <div className="form-field">
                    <label>Type</label>
                    <select className="input" onChange={HandleChange} name="Type" value={inputData.Type} required >
                        <option value="">Select type</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Salary">Salary</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select
                        required
                        className="input"
                        name="PaymentMethod"
                        onChange={HandleChange}
                        value={inputData.PaymentMethod}

                    >
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    Add Record
                </button>
            </form>
        </div>
    )
};

export default Form;