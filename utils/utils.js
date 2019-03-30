const crypto = require('crypto');

const generateToken = () => crypto.randomBytes(48).toString('hex');

module.exports = {
  generateToken
}
