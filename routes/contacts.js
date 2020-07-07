const express = require("express");
const { Router } = require("express");
const router = express.Router();
const config = require("config");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const Contact = require("../models/Contact");

// @route : GET api/contacts
// DESC : Get all the contacts
// @access : Private

router.get("/", auth, async (req, res) => {
  try {
    // Get user from database and sort it by date
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route : PUT api:id/contacts
// DESC : Update contact
// @access : Private

router.put("/:id", (req, res) => res.send("Update contacts"));

// @route : POST api/contacts
// DESC : ADD contact
// @access : Private

router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route : PUT api:id/contacts
// DESC : Delete contact
// @access : Private

router.delete("/:id", (req, res) => res.send("Delete contacts"));

module.exports = router;
