const Joi = require("joi");

const createSubmission = Joi.object({
  firstName: Joi.string().trim().uppercase().required(),
  lastName: Joi.string().trim().uppercase().required(),
  dob: Joi.date().required(),
  gender: Joi.string().valid("MALE", "FEMALE", "OTHER").uppercase().required(),
  email: Joi.string().trim().email().required(),
  phoneNumber: Joi.object({
    countryCode: Joi.string().trim().required(),
    dialCode: Joi.string().trim().required(),
    number: Joi.string().trim().required(),
    format: Joi.string().trim().required(),
  }).required(),
  country: Joi.string().trim().required(),
  state: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  university: Joi.string().trim(),
  experience: Joi.array()
    .items(
      Joi.object({
        company: Joi.string().trim().required(),
        role: Joi.string().trim().required(),
        startDate: Joi.date().allow(null),
        endDate: Joi.date().allow(null),
        technologies: Joi.array().items(Joi.string().trim()).required(),
        description: Joi.string().trim().allow(null),
      })
    )
    .required(),
});

module.exports = { createSubmission };
