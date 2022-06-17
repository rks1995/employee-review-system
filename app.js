const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const homeRoutes = require('./routes')
const db = require('./db/mongoose')
const notFoundPage = require('./middleware/NotFound')
const app = express()
const port = process.env.PORT || 5000

// use static files
app.use(express.static('assets'))

// get information from form data into request body
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// set up view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// ejs layouts
app.use(ejsLayouts)

app.use('/', homeRoutes)

app.use(notFoundPage)

app.listen(port, () => {
  console.log(`server is up and running at ${port}....`)
})
