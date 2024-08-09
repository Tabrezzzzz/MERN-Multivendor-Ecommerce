const vendorModel  = require('../Models/vendorModel');
const bcrypt = require("bcryptjs");

const registerVendorController = async (req, res) => {
    try{
    const {companyId,  email, companyName, password } = req.body;
    const emailExist = await vendorModel.findOne({email})
        if(emailExist){
            res.json({messsage:"email already exist"})
        }else{
    const hashed_password = await bcrypt.hash(password, 10);
    const newVendor = await new vendorModel({
        companyId,
        email,
        companyName,
        password: hashed_password,
   });
   newVendor.save();
   res.status(201).json({message: "Your Vendor Account Created Successfuly"})
}
}catch(error){  
        console.log(error);
    }
}

const LoginVendorController = async (req, res) => {
    try{
           const {companyId, password } = req.body;
           const vendor = await vendorModel.findOne({companyId});
           const isMatch = await bcrypt.compare(password, vendor.password);
           if(isMatch){
            res.status(200).send(vendor);
           }else{
            res.json({
                message: "Company ID does not exist"
              });
           }
    }
    catch(error){
        console.log(error)
    }
}
module.exports = {
    registerVendorController,
    LoginVendorController
    
}