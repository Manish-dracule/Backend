const mongoose = require('mongoose');
require('dotenv').config();

connectDB = async () =>{
    await mongoose.connect(process.env.URI);
    console.log('connected tol db');
}

module.exports = connectDB;