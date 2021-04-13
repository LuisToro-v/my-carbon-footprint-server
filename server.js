require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/userRoutes')

const transportRouter = require('./routes/transportRoutes')


const app = express();
// const bodyParser = require("body-parser");
app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.use('/auth', userRouter)


app.use('/transport', transportRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`)
});
