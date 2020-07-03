const express = require("express");
const { Router } = require("express");
const router = express.Router();

// @route : GET api/contacts
// DESC : Get all the contacts
// @access : Private

router.get("/", (req, res) => res.send("Get contacts"));

// @route : PUT api:id/contacts
// DESC : Update contact
// @access : Private

router.put("/:id", (req, res) => res.send("Update contacts"));

// @route : POST api/contacts
// DESC : ADD contact
// @access : Private

router.post("/", (req, res) => res.send("Add contacts"));

// @route : PUT api:id/contacts
// DESC : Delete contact
// @access : Private

router.delete("/:id", (req, res) => res.send("Delete contacts"));

module.exports = router;
