// XKvLpJOiihEjpjel
// mongodb+srv://ayushmannbaghel:XKvLpJOiihEjpjel@transactiontracker.pwofy5u.mongodb.net/
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import Transaction_list_Model from "./schema/transaction_list.js";
import bodyParser from "body-parser";
const app=express();
const port= 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.json);


const mongoDBURI= process.env.MONGO_DB_URI;


mongoose.connect(mongoDBURI).then(()=>{
    console.log("CONNECTED TO MONGODB")
})
.catch((err)=>{
    console.error("Failed to connect to MongoDB",err);
});


// app.get("/",(req,res)=>{
//     // console.log("error");

//     res.send("<h1>hello world</h1>");
// });
app.get("/getalltransactions",async (req,res)=>{
    const response=await Transaction_list_Model.find({});
    res.send(response);

});
app.post("/transaction", async (req, res) => {
    try {
        
        // await mongoose.connect(mongoDBURI);
        
        console.log(req.body);
        const new_transaction = req.body;
        new_transaction.Date=new Date();
       
        const new_record = await  Transaction_list_Model.create(new_transaction);
        await new_record.save();
        // res.json(new_record);
        // console.log(process.env.PORT);
        res.redirect("http://localhost:5000/");
        // res.sendStatus(200);
       
    } catch (error) {
        console.log("Failed to send JSON");
        res.sendStatus(500);
    }
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
