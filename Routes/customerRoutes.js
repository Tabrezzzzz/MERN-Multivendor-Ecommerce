const express = require("express");
const {
    registerCustomerController,
    loginCustomerController,
    forgotPasswordController
} = require('../Controllers/customerControllers')

const router = express.Router();



router.post("/customer-register", registerCustomerController);
router.post("/customer-login", loginCustomerController);
router.post("/forgot-password", forgotPasswordController);

module.exports = router;
