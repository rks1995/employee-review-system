const jwt = require('jsonwebtoken')

const dashboardController = async (req, res) => {
  console.log(req.cookies)
  const tokenKey = req.cookies.tokenKey
  try {
    const user = jwt.verify(tokenKey, 'somesecret')
    console.log(user)
    res.render('dashboard', {
      title: 'Dashboard',
    })
  } catch (error) {
    res.redirect('/login')
  }
}

module.exports = {
  dashboardController,
}
