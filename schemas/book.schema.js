
const Joi = require('joi');

exports.CreateBookSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    author: Joi.string().required(),

    no_of_pages: Joi.string().required
})

exports.UpdateBookSchema = Joi.object({
  name: Joi.string()
      .min(3)
      .max(30),

  author: Joi.string(),

  no_of_pages: Joi.string()
})

