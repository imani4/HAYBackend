const express = require("express");
const {
    fundRaiserController
} = require("../controllers/fundRaiserController");
const router = express.Router();


router.route("/fund-raiser-controller").post(fundRaiserController);

module.exports = router;