const express=require('express');
const router=express.Router();
const aicontroller =require('../controller/ai.controller');

router.post('/get-review',aicontroller.getReview)

module.exports=router;