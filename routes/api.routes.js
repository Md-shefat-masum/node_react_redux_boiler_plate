const express = require("express");
const userModel = require("../app/models/user.model");
const router = express.Router();

router.get('/api/v1/users',async function(req,res,next){
    let users = await userModel.find().exec();
    return res.json(users);
})

router.post('/api/test-data',function(req,res){
    return res.json(req.body);
})

module.exports = () => router;