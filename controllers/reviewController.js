const Reviews = require('../models/Reviews')

const addReview = async (req, res) => {
  const { content, to, from } = req.body

  try {
    const review = await Reviews.findOne({ to, from })

    if (review) {
      // replace the review
      review.reviews = content
      review.save()
      return res.redirect('back')
    }
    // create new review
    await Reviews.create({
      reviews: content,
      to,
      from,
    })
    return res.redirect('back')
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

module.exports = {
  addReview,
}
