import mongoose from "mongoose";
import React from "react";

// interface TransactionList {
//     userID:string;
//     date:Date;
//     description: string;
//     amount: number;
//     category: string;
//     paymentMethod:string
// }

const Transaction_list_schema=new mongoose.Schema({
    Date:{type:Date,required:true},
    Description:{type:String,required:true},
    Amount:{type:Number,required:true},
    Type:{type:String,required:true},
    PaymentMethod:{type:String,required:true},
});

const Transaction_list_Model=mongoose.model(
    "TransactionList",
    Transaction_list_schema
);

export default Transaction_list_Model;