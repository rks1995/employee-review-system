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

// ================ view employees ===================== //
const listEmployees = async (req, res) => {
  res.redirect('/user/dashboard')
}

// ================ add employee ===================== //
const addEmployee = async (req, res) => {
  const { name, email, password, admin } = req.body
  try {
    const user = await Users.findOne({ email })
    if (user) {
      return res.status(401).json({ message: 'email already exist!' })
    }

    await Users.create({
      name,
      email,
      password,
      isAdmin: admin,
    })
    res.redirect('back')
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
// ================ update employee details ===================== //

// ================ delete employee details ===================== //
const assignTask = async (req, res) => {
  res.redirect('/user/dashboard')
}

module.exports = {
  dashboardController,
  listEmployees,
  addEmployee,
  assignTask,
}
