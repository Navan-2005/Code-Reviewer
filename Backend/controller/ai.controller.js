const { response } = require('../app');
const aiservice=require('../services/ai.service');

module.exports.getReview=async (req,res)=>{
    const code=req.body.code;
    if(!code)
    {
        return res.status(400).json({message:"code is required"});
    }

    const response=await aiservice(code);
    res.send(response);
}