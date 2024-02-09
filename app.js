const express = require ("express");
const app = express();
const userRouter = require("./routes/userRoute");
const connectDb = require('./config/dbconfig');
const dotenv = require("dotenv").config();
connectDb();

// middleware to recieve data in json format
// body parser
app.use(express.json());

app.use('/api/profile', userRouter);



const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

