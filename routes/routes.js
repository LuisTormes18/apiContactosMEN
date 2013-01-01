const auth = require("../components/auth/auth.routes");
const users = require("../components/users/users.routes");
const contacts = require("../components/contacts/contacts.routes");
const express = require("express");
const router = express.Router();

// Router auth
router.use("/auth", auth);

// Router users
router.use("/users", users);

// Router contacts
router.use("/contacts", contacts);

module.exports = router;
