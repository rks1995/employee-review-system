const express = require('express')
const router = express.Router()

const {
  dashboardController,
  addEmployee,
  deleteEmployee,
  assignTask,
  listUsers,
  deleteTask,
  deleteReview,
} = require('../controllers/userController')
const { addReview } = require('../controllers/reviewController')
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboardController)
router.route('/add').post(addEmployee)
router.route('/dashboard/:id').get(deleteEmployee)
router.route('/assign').post(assignTask)
router.route('/list').get(listUsers)
router.route('/delete-task').get(deleteTask)
router.route('/add-reviews').post(addReview)
router.route('/delete-review/:id').get(deleteReview)

module.exports = router
