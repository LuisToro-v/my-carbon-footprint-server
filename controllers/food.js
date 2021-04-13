require('dotenv').config();
const db = require('../db/db')
// Insert new Food record
const logFoodTotal = async(req,res)=> {
    let foodTotal = req.body.result_food_total;
    let user_id = req.body.user_id;
    if(!(Number.isInteger(foodTotal) && Number.isInteger(user_id))){
        return res.status(400).json({
            message: "Bad input",
        });
    }
    try{
        await db.none("INSERT INTO FOOD(result_food_total, user_id) VALUES($1,$2)",[foodTotal,user_id]);
        return res.status(200).json({
            message: "success",
        });
    }
    catch(err){
        res.status(500).send(err)
    }
}

// Retrieve food items of a user by start and end time. 
const foodTimeFrame = async(req,res)=> {
    let start = req.body.start;
    let end = req.body.end;
    let user_id = req.body.user_id;
    if(!(Number.isInteger(user_id))){
        return res.status(400).json({
            message: "Bad input",
        });
    }
    try{
        const data = await db.any("SELECT * FROM FOOD Where time_input BETWEEN $1 AND $2 and user_id = $3",[start,end,user_id]);
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
    logFoodTotal,
    foodTimeFrame
}