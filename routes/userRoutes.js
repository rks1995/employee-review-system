const express = require('express')
const router = express.Router()

const {
  dashboardController,
  listEmployees,
  addEmployee,
  assignTask,
} = require('../controllers/userController')
const authMiddleware = require('../middleware/auth')

router
  .route('/dashboard')
  .get(authMiddleware, dashboardController)
  .get(listEmployees)

// router.route('/list').get(listEmployees)
// router.route('/add').get(addEmployee)
// router.route('/assign').get(assignTask)

module.exports = router
