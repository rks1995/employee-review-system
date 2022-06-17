require('dotenv').config()
const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
  const authHeader = req.cookies
  if (!authHeader.tokenKey) {
    return res.redirect('/login')
  }

  try {
    const token = authHeader.tokenKey
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decode
    next()
  } catch (error) {
    res.clearCookie('tokenKey')
    return res.redirect('/login')
  }
}

module.exports = authMiddleware
