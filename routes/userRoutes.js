const express = require('express')
const router = express.Router()

const {
  dashboardController,
  addEmployee,
  deleteEmployee,
  assignTask,
} = require('../controllers/userController')
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboardController)
router.route('/add').post(addEmployee)
router.route('/dashboard/:id').get(deleteEmployee)
// router.route('/assign').get(assignTask)

module.exports = router
