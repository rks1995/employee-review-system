const dashboardController = (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
  })
}

module.exports = {
  dashboardController,
}
