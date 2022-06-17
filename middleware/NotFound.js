const notFoundPage = (req, res) => {
  res.render('error', {
    title: 'Page Not Found',
  })
}

module.exports = notFoundPage
