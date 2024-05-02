const PROJECTION = require("../../config/config");
const Submission = require("../services/submission.service");
const { throwError } = require("../utils/error.util");

/**
 * @desc Creates a new submission
 * @route POST /api/v1/submission
 * @access Public
 */
const create = async (req, res, next) => {
  try {
    const email = req.body.email;

    const submissionExists = await Submission.getOneByEmail(
      { email },
      PROJECTION.SUBMISSION_EMAIL_EXISTS
    );

    if (submissionExists.status === "SUCCESS") {
      throwError(
        "FAILED",
        409,
        "Submission with this email already exists.",
        "0x000A81"
      );
    }

    const submission = await Submission.create(req.body);
    if (submission.status === "FAILED") {
      throwError(
        submission.error.status,
        submission.error.statusCode,
        submission.error.message,
        submission.error.identifier
      );
    }

    submission.data.isDeleted = undefined;

    res.status(201).json({
      status: submission.status,
      message: "Submission created successfully",
      data: submission.data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
