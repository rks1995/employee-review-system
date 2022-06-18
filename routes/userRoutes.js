const express = require('express')
const router = express.Router()

const {
  dashboardController,
  addEmployee,
  assignTask,
} = require('../controllers/userController')
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboardController)

router.route('/add').post(addEmployee)
// router.route('/assign').get(assignTask)

module.exports = router
