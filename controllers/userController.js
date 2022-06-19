const Users = require('../models/User')

const dashboardController = async (req, res) => {
  const { action, id, l_name, r_name } = req.query
  // this user is coming from cookies
  const user = req.user
  let editUser = {}
  try {
    const all_users = await Users.find({})
    if (id) editUser = await Users.findById(id)
    res.render('dashboard', {
      title: 'Dashboard',
      all_users: all_users,
      user: user,
      action,
      editUser: editUser,
      l_name,
      r_name,
    })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// ================ view employees ===================== //
const listEmployees = async (req, res) => {
  res.redirect('/user/dashboard')
}

// ================ add & update employee ===================== //
const addEmployee = async (req, res) => {
  const { name, email, password, admin } = req.body
  try {
    const user = await Users.findOne({ email })
    if (user) {
      if (!user.id) {
        return res.status(401).json({ message: 'email already exist!' })
      }
      //update the user
      await Users.findByIdAndUpdate(user.id, {
        name,
        email,
        password,
        isAdmin: admin,
      })
      return res.redirect('back')
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

// ================ delete employee details ===================== //
const deleteEmployee = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id)
    res.redirect('back')
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const assignTask = async (req, res) => {
  res.redirect('/user/dashboard')
}

module.exports = {
  dashboardController,
  listEmployees,
  addEmployee,
  assignTask,
  deleteEmployee,
}
