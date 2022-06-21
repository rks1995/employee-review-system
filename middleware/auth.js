const jwt = require('jsonwebtoken')

const authMiddleware = async (req, res, next) => {
  const authHeader = req.cookies
  if (!authHeader.tokenKey) {
    return res.redirect('/login')
  }

  try {
    const token = authHeader.tokenKey
    const decode = jwt.verify(token, 'somesecret')
    req.user = decode
    next()
  } catch (error) {
    res.clearCookie('tokenKey')
    return res.redirect('/login')
  }
}

module.exports = authMiddleware
