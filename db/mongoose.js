require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGO_URI

const db = mongoose
  .connect(url)
  .then(() => {
    console.log('connection successfull')
  })
  .catch((err) => {
    console.log('err in connecting db')
  })

module.exports = db
