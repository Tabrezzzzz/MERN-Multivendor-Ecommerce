const mongoose = require('mongoose');

const vendorRegisterSchema = mongoose.Schema({
    companyId:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    companyName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamp: true}
);

const vendorModel = mongoose.model('vendor', vendorRegisterSchema);

module.exports = vendorModel;