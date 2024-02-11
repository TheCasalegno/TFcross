const express = require("express");
const router = express.Router();
require("dotenv").config()

const WebSocket = require("ws");
const client = new WebSocket(process.env.WS)

router.get("/", (req, res) => {
    res.render("chrono", {});
});

module.exports = router;
