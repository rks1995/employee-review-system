const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reviews',
    },
  ],
})

module.exports = mongoose.model('Users', userSchema)
