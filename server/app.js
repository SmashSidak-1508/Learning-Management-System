require('dotenv').config();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    crendentials : true
}));

app.use(cookieParser());
app.use('/ping',(req,res)=>{
    res.send('Pong');
})

// 3 routes
app.all('*',(req,res)=>{
    res.status(404).send('OOPS! 404 Page Not Found');
})
module.exports = app;