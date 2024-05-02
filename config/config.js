const PROJECTION = {
  submission: {
    default: { isDeleted: 0 },
    SUBMISSION_EMAIL_EXISTS: { email: 1, isDeleted: 0 },
  },
};

module.exports = PROJECTION;
