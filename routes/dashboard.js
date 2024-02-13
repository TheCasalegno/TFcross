const express = require("express");
const router = express.Router();
const config = require("../config.json")

let websocketURL = config.wsDomain + ":" + config.wsPort

let url = config.url;

router.get("/", (req, res) => {
    res.render("dashboard", {
      websocketURL,
      url
    });
  });

module.exports = router;
