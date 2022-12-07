const customer  = require('../Models/vendorModel');

const registerVendorController = async (req, res) => {
    try{
        const newVendor = new register(req.body);
        await newVendorr.save();
        res.status(201).send("Your Account Created Successfuly")
       
    }
    catch(error){
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