const register  = require('../Models/customerModel');
const bcrypt = require("bcryptjs");

const registerCustomerController = async (req, res) => {
    try{
        const {fullname,  username, email, password } = req.body;
         const hashed_password = await bcrypt.hash(password, 10);
        const newCustomer = await new register({
            fullname,
            username,
            email,
            password: hashed_password,
        });
        await newCustomer.save();
        res.status(201).json({message: "Your Account Created Successfuly"})
       
    }
    catch(error){
        console.log(error);
    }
}

const loginCustomerController = async (req, res) => {
    try{
           const {username, password } = req.body;
           const customer = await register.findOne({username, password});
           if(customer){
            res.status(200).send(customer)
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
    loginCustomerController
}