const Submission = require("../models/submission.model");
const { throwError } = require("../utils/error.util");

const create = async (submission) => {
  try {
    const newSubmission = await Submission.create(submission);

    if (newSubmission) {
      return { status: "SUCCESS", data: newSubmission };
    }

    return {
      status: "FAILED",
      error: {
        statusCode: 422,
        identifier: "0x000A00",
        message: "Failed to create submission.",
      },
    };
  } catch (error) {
    throwError("FAILED", 422, error.message, "0x000A01");
  }
};

const getOneByEmail = async (filter) => {
  try {
    const submission = await Submission.findOne(filter);

    if (submission) {
      return { status: "SUCCESS", data: submission };
    }

    return {
      status: "FAILED",
      error: {
        statusCode: 404,
        identifier: "0x000A02",
        message: "Submission not found.",
      },
    };
  } catch (error) {
    throwError("FAILED", 422, error.message, "0x000A03");
  }
};

module.exports = { create, getOneByEmail };
