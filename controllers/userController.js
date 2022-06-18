const Users = require('../models/User')

const dashboardController = async (req, res) => {
  const { action } = req.query
  const user = req.user
  try {
    const all_users = await Users.find({})
    res.render('dashboard', {
      title: 'Dashboard',
      all_users: all_users,
      user: user,
      action,
    })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const listEmployees = async (req, res) => {
  console.log(req.params)
  res.redirect('/user/dashboard')
}

const addEmployee = async (req, res) => {
  res.redirect('/user/dashboard')
}

const assignTask = async (req, res) => {
  res.redirect('/user/dashboard')
}

module.exports = {
  dashboardController,
  listEmployees,
  addEmployee,
  assignTask,
}
