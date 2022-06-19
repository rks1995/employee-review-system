const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  reviews: {
    type: String,
    required: true,
  },
  to: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  from: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
})

module.exports = mongoose.model('Reviews', reviewSchema)
