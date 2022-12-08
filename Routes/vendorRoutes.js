const express = require("express");
const {
    registerVendorController
} = require('../Controllers/vendorController')
const {
    LoginVendorController
} = require('../Controllers/vendorController')

const router = express.Router();

router.post("/vendor-register", registerVendorController);
router.post("/vendor-login", LoginVendorController);

module.exports = router;
