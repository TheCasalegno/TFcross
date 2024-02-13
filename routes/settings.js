const express = require("express");
const router = express.Router();
require("dotenv").config()
const config = require("../config.json")

router.get("/", (req, res) => {
    res.render("settings", {});
});

module.exports = router;