const express = require("express");
const {
    registerCustomerData
} = require('../Controllers/customerControllers')

const router = express.Router();



router.post("/user-register", registerCustomerData);

module.exports = router;
