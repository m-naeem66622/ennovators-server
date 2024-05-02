const express = require("express");
const router = express.Router();

// Import your route handlers
const userSubmissions = require("./submission.route");

// Mount the route handlers
router.use("/submissions", userSubmissions);

module.exports = router;
