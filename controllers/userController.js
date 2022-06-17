const dashboardController = async (req, res) => {
  console.log(req.query)
  const { action } = req.query
  const user = req.user
  res.render('dashboard', {
    title: 'Dashboard',
    user: user,
    action,
  })
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
