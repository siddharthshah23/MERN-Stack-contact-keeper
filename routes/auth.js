const express = require("express");
const router = express.Router();

// @route : GET api/auth
// DESC : Getting user
// @access : Private

router.get("/", (req, res) => res.send("Get logged in user"));
// @route : POST api/auth
// DESC :  Auth user and get token
// @access : Public

router.post("/", (req, res) => res.send("Auth user and get token"));

module.exports = router;
