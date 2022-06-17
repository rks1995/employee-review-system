const Users = require('../models/User')

const signin = (req, res) => {
  res.render('signin', {
    title: 'Sign In',
  })
}

const signup = (req, res) => {
  res.render('signup', {
    title: 'Sign Up',
  })
}

const createSession = async (req, res) => {
  const { name, email, password, confirm_password } = req.body
  try {
    if (password !== confirm_password) {
      return res.status(404).redirect('/register')
    }
    const user = await Users.create({
      name: name,
      email: email,
      password: password,
    })
    res.status(401).redirect('/login')
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await Users.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    if (user.password !== password) {
      return res.redirect('/login')
    }

    res.redirect('/user/dashboard')
  } catch (error) {}
}

module.exports = {
  signin,
  signup,
  createSession,
  loginUser,
}
