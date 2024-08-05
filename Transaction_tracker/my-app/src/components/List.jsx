import React from "react";
import { useState, useEffect } from "react";
import "./transaction.css";
function List(props) {
    const [transaction_list, setTransactionlist] = useState([]);
    // const [total_monthly, setMonthly] = useState("");
    var total=0;
    const getData = async () => {
        try {

            const response = await fetch("http://localhost:4000/getalltransactions")
            const json = await response.json();
            setTransactionlist(json);
            
        } catch (error) {
            console.error(error);
        }
    }
    console.log(transaction_list);
    transaction_list.forEach((item)=>{
        total+=item.Amount;
    })
    props.func(total);

    getData();
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Payment Method</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody> {transaction_list.map((item) => (

                    <tr>
                       
                        <td>{item.Description}</td>
                        <td>{item.Amount}</td>
                        <td>{item.Type}</td>
                        <td>{item.PaymentMethod}</td>
                        <td>{item.Date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
};

export default List;