const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: { type: String, trim: true, required: true },
  role: { type: String, trim: true, required: true },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  technologies: { type: [String], trim: true, required: true },
  description: { type: String, trim: true, default: null },
});

const userSubmissionSchema = new mongoose.Schema(
  {
    firstName: { type: String, uppercase: true, trim: true, required: true },
    lastName: { type: String, uppercase: true, trim: true, required: true },
    dob: { type: Date, required: true },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      uppercase: true,
      required: true,
    },
    email: { type: String, trim: true, required: true, unique: true },
    phoneNumber: {
      countryCode: { type: String, trim: true, required: true },
      dialCode: { type: String, trim: true, required: true },
      number: { type: String, trim: true, required: true },
      format: { type: String, trim: true, required: true },
    },
    country: { type: String, trim: true, required: true },
    state: { type: String, trim: true, required: true },
    city: { type: String, trim: true, required: true },
    university: { type: String, trim: true, default: null},
    experience: { type: [experienceSchema], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserSubmission", userSubmissionSchema);
