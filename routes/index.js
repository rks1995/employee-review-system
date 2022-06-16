const express = require('express');
const router = express.Router();

const { signin, signup } = require('../controllers');

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  });
});

router.get('/login', signin);
router.route('/register').get(signup);

module.exports = router;
