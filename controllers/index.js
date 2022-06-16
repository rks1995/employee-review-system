const signin = (req, res) => {
  res.render('signin', {
    title: 'Sign In',
  });
};

const signup = (req, res) => {
  res.render('signup', {
    title: 'Sign Up',
  });
};

module.exports = {
  signin,
  signup,
};
