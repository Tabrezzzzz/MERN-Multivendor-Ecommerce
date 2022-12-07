const register  = require('../Models/customerModel');

const registerCustomerData = async (req, res) => {
    try{
        const newCustomer = new register(req.body);
        await newCustomer.save();
        res.status(201).send("Your Account Created Successfuly")
       
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    registerCustomerData
}