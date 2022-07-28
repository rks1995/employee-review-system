require('dotenv').config()
const mongoose = require('mongoose')

const db = mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connection successfull')
  })
  .catch((err) => {
    console.log('err in connecting db')
  })

module.exports = db
