const Users = require('../models/User')
const jwt = require('jsonwebtoken')

const homeController = (req, res) => {
  if (req.cookies.tokenKey) {
    return res.redirect('/user/dashboard')
  }
  res.render('home', {
    title: 'Home',
  })
}

const signin = (req, res) => {
  if (req.cookies.tokenKey) {
    return res.redirect('/user/dashboard')
  }

  res.render('signin', {
    title: 'Sign In',
  })
}

const signup = (req, res) => {
  if (req.cookies.tokenKey) {
    return res.redirect('/user/dashboard')
  }
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

    const { id, name, isAdmin } = user
    const token = jwt.sign({ id, name, isAdmin }, 'somesecret', {
      expiresIn: '1h',
    })

    res.cookie('tokenKey', token, {
      expires: 0,
    })
    res.redirect('/user/dashboard')
  } catch (error) {}
}

const destroySession = (req, res) => {
  console.log('loging out...')
  res.clearCookie('tokenKey')
  res.redirect('/login')
}

module.exports = {
  homeController,
  signin,
  signup,
  createSession,
  loginUser,
  destroySession,
}
