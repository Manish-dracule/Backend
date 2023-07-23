const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'name required']
    },
    phone : {
        type: Number,
        required: [ true, 'phone number required']
    },
    email: {
        type: String,
        required : [true, 'email required']
    }
},{
    timestamps: true,
    
})

module.exports = mongoose.model('contacts',contactsSchema);