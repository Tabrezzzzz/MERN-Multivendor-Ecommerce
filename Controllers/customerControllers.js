const register  = require('../Models/customerModel');

const registerCustomerController = async (req, res) => {
    try{
        const newCustomer = new register(req.body);
        await newCustomer.save();
        res.status(201).send("Your Account Created Successfuly")
       
    }
    catch(error){
        console.log(error);
    }
}

const registerCustomerLogin = async (req, res) => {
    try{
           const {username, password } = req.body;
           const customer = await register.findOne(username, password);
           if(customer){
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
    registerCustomerController,
    registerCustomerLogin
}