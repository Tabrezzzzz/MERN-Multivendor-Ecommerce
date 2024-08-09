const register  = require('../Models/customerModel');
const bcrypt = require("bcryptjs");

const registerCustomerController = async (req, res) => {
    try{
        const {fullname,  username, email, password } = req.body;
        const emailExist = await register.findOne({email})
        const usernameExist = await register.findOne({username})
        if(emailExist){
            res.json({messsage:"email already exist"})
        }
        else if(usernameExist){
            res.json({messsage:"username taken"})
        }
        else{
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
       
    }
    catch(error){
        console.log(error);
    }
}

const loginCustomerController = async (req, res) => {
    try{
        const {username, password } = req.body;
           let user = await register.findOne({ username });
           if (!user) {
             return res.status(400).json({ error: "Invalid User" });
           }
       
           const isMatch = await bcrypt.compare(password, user.password);

           if (!isMatch) {
             return res.status(400).json({ error: "Invalid credentials" });
           }
            res.json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                  },
              });
           
    }
    catch(error){
        console.log(error)
    }
}


const forgotPasswordController = async (req, res) => {
    const {email} = req.body
    let findEmail = await register.findOne({email})
    if(findEmail){
        res.json({
            message: "user verified for pasword change"
        })
    }else{
        res.json({
            message:"Email does not exist"
        })
    }
}


module.exports = {
    registerCustomerController,
    loginCustomerController,
    forgotPasswordController
}