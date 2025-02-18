const express = require('express');
const dotenv=require('dotenv')
dotenv.config();
const aiRoutes=require('./routes/ai.routes');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

app.use('/ai',aiRoutes);


module.exports=app;