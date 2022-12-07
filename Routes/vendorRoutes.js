const express = require("express");

const {
    registerVendorData
} = require('../Controllers/vendorController')

const router = express.Router();

router.post("/vendor-register", registerVendorController);

module.export = router;