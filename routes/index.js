const express = require('express')
const router = express.Router()

const { signin, signup, createSession, loginUser } = require('../controllers')

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  })
})

router.route('/login').get(signin).post(loginUser)
router.route('/register').get(signup).post(createSession)

router.use('/user', require('./userRoutes'))

module.exports = router
