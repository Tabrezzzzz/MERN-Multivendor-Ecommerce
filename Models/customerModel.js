const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true,                                                                                                                                                                                              

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamp: true}
);

const registers = mongoose.model('register', registerSchema);

module.exports = registers;