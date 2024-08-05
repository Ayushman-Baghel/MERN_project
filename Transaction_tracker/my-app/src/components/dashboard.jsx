import React from "react";
import { useState } from "react";
import "./transaction.css";
import Form from './Form';
import List from './List';
function Dashboard() {

    const [total_amount,setTotal]=useState("");
    return (
        <div className="dashboard-container">  
            <h1> Welcome User! Here Are Your Finances:</h1>
            <Form className="" />
            <div>Total Monthly: Rs{total_amount}</div>
            <List func={setTotal}/>
        </div>
    );
};

export default Dashboard;