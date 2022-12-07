const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    vendorId:{
        type:String,
        required:true
    }

},{timestamp: true}
);

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;