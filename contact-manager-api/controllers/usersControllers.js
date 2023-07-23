const asyncHandler = require('express-async-handler');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../models/users');

// route api/users/login
// public route

const loginUsers = asyncHandler(async (req,res)=>{
    res.json({})
})

// route api/users/register
// public route

const registerUsers = asyncHandler(async (req,res)=>{
        const {username,email,password }= req.body;
        if(!username || !email || !password){
            res.status(400);
            throw Error('All fields are mandatory');
        } 
        const user = await users.findOne({email});
        if(user){
            res.status(400)
            throw Error('user already registered');
        }
        const hashpassword = await bcrypt.hash(password,10);
        const userdata = await users.create({
            username,
            email,
            password: hashpassword

        });
        if(userdata){
            res.json({
                username : userdata.username,
                email : userdata.email
            })
        }
            else{
                res.status(401);
                throw Error('user data is incorrect');

            }

    user.json({
    message: "user is created succesfully"
    })

    

})

// route api/users/current
// private route

const currentUsers = asyncHandler(async (req,res)=>{
    res.json({})
})

module.exports = {loginUsers,currentUsers,registerUsers}