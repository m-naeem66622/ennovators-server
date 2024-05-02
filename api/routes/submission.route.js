const express = require("express");
const router = express.Router();

const Controller = require("../controllers/submission.controller");
const validate = require("../middlewares/validateReq.middleware");
const Validation = require("../validators/submission.validator");

// Route to create a new submission
router.post("/", validate(Validation.createSubmission, "BODY"), Controller.create);

module.exports = router;
