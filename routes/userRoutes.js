const express = require('express')
const router = express.Router()

const { dashboardController } = require('../controllers/userController')

router.route('/dashboard').get(dashboardController)

module.exports = router
