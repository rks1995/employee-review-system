require('dotenv').config()
const mongoose = require('mongoose')

const url =
  'mongodb+srv://savio:1234@nodeexpressprojects.vq35t.mongodb.net/14-Employee?retryWrites=true&w=majority'

const db = mongoose
  .connect(url)
  .then(() => {
    console.log('connection successfull')
  })
  .catch((err) => {
    console.log('err in connecting db')
  })

module.exports = db
