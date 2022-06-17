const express = require('express')
const router = express.Router()

const {
  homeController,
  signin,
  signup,
  createSession,
  loginUser,
  destroySession,
} = require('../controllers')

router.route('/').get(homeController)
router.route('/login').get(signin).post(loginUser)
router.route('/logout').get(destroySession)
router.route('/register').get(signup).post(createSession)

router.use('/user', require('./userRoutes'))

module.exports = router
