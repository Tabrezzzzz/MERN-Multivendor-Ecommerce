const express = require("express");
const {
    registerCustomerController,
    loginCustomerController
} = require('../Controllers/customerControllers')

const router = express.Router();



router.post("/customer-register", registerCustomerController);
router.post("/customer-login", loginCustomerController);

module.exports = router;
