const express = require("express");
const {
    registerVendorController
} = require('../Controllers/vendorController')

const router = express.Router();

router.post("/vendor-register", registerVendorController);

module.exports = router;