const joi = require('joi');

const validate = (data, validation, options) => {
  return new Promise((resolve, reject) => {
    joi.validate(data, validation, options, err => {
      if (err) {
        reject(err.message);
      }

      resolve();
    })
  })
}

const validateProduct = (product) => {
  const validation = joi.object().keys({
    productName: joi.string().min(1).required(),
    price: joi.number().min(1).required(),
    quantity: joi.number().min(1).required()
  })

  return validate(product, validation)
}

module.exports = {
  validateProduct
}