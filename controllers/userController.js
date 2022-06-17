const dashboardController = async (req, res) => {
  const user = req.user
  console.log(user)
  res.render('dashboard', {
    title: 'Dashboard',
    user: user,
  })
}

module.exports = {
  dashboardController,
}
