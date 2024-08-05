import express, { Request, Response } from "express";
import Transaction_list_Model from "../schema/transaction_list";

const router = express.Router();

router.get("/getAllByUserID/:userID", async (req, res) => {
    try {
        const userID = req.params.userID;
        const records = await Transaction_list_Model.find({ userID: userID });
        if (records.length === 0) {
            return res.sendStatus(404);
        }
        res.send(records);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post("/", async (req, res) => {
    try {
        const new_transaction = req.body;
        const new_record = new Transaction_list_Model(new_transaction);
        const saved_record = await new_record.save();

        res.send(saved_record);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const new_transaction = req.body;
        const record = await Transaction_list_Model.findByIdAndUpdate(id, new_transaction, { new: true });
        if (!record) {
            return res.sendStatus(404);
        }


        res.send(record);
    } catch (error) {
        res.sendStatus(500);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const record = await Transaction_list_Model.findByIdAndDelete(id);
        if (!record) {
            return res.sendStatus(404);
        }


        res.send(record);
    } catch (error) {
        res.sendStatus(500);
    }
});


export default router;