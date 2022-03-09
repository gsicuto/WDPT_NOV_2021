const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true, required: true },
  email: {
    type: String,
    unique: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    lowercase: true,
    required: true,
  },
  address: [
    {
      street: String,
      number: Number,
      complement: String,
      zipCode: String,
      principal: { type: Boolean, default: false },
    },
  ],
});


module.exports = mongoose.model('User', userSchema);
