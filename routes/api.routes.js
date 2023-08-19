const express = require("express");
const userModel = require("../app/models/user.model");
const router = express.Router();

router.get('/api/v1/users',async function(req,res,next){
    let users = await userModel.find().exec();
    return res.json(users);
})

module.exports = () => router;