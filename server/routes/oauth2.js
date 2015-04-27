module.exports = function(router, passport, provider) {
  router.post('/' + provider, function(req, res) {
    return res.send({
      user: {}
    });
  });
  router.get('/' + provider + '/callback',
    passport.authenticate(provider), function(req, res) {
    return res.redirect('/login?code=' + req.query.code);
  });
};
