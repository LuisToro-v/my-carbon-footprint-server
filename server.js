require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRoutes')
const foodRouter = require('./routes/foodRoutes')


const app = express();
// const bodyParser = require("body-parser");
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.use('/auth', userRouter)

app.use('/food',foodRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`)
});
