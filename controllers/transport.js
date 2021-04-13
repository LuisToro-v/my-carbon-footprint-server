require('dotenv').config();
const db = require('../db/db')
// Insert new transport record
const transportTotal = async(req,res)=> {
    let total = req.body.result_transport_total;
    let user_id = req.body.user_id;
    if(!(Number.isInteger(total) && Number.isInteger(user_id))){
        return res.status(400).json({
            message: "Bad input",
        });
    }
    try{
        await db.none("INSERT INTO transportation(result_transport_total, user_id) VALUES($1,$2)",[total,user_id]);
        return res.status(200).json({
            message: "success",
        });
    }
    catch(err){
        res.status(500).send(err)
    }
}

// Retrieve food items of a user by start and end time. 
const transportTimeFrame = async(req,res)=> {
    let start = req.body.start;
    let end = req.body.end;
    let user_id = req.body.user_id;
    if(!(Number.isInteger(user_id))){
        return res.status(400).json({
            message: "Bad input",
        });
    }
    try{
        const data = await db.any("SELECT * FROM transportation Where time_input BETWEEN $1 AND $2 and user_id = $3",[start,end,user_id]);
        if(data.length == 0){
            return res.json({
                message:"No record"
            })
        }
        return res.status(200).json({
           message:data
        });
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    transportTotal,
    transportTimeFrame
}