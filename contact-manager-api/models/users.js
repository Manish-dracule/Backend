const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        required:[true,'username is required']
    },
    email: {
        type: String,
        unique: true,
        required:[true,'email is required']
    },
    password: {
        type: String,
        required: [true,'password is required']
    }
})

module.exports = mongoose.model('users',usersSchema);