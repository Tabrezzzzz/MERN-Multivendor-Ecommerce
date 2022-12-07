const vendorModel  = require('../Models/vendorModel');
const bcrypt = require("bcryptjs");

const registerVendorController = async (req, res) => {
    try{
    const {companyname,  email, userid, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);
    const newVendor = await new vendorModel({
        companyname,
        email,
        userid,
        password: hashed_password,
   });
   await newVendor.save();
        res.status(201).json({message: "Your Vendor Account Created Successfuly"})
}catch(error){  
        console.log(error);
    }
}

const registerVendorLogin = async (req, res) => {
    try{
           const {username, password } = req.body;
           const vendor = await register.findOne(username, password);
           if(vendor){
            res.status(200).send(user);
           }else{
            res.json({
                message: "Login Fail"
              });
           }
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    registerVendorController,
    registerVendorLogin
}