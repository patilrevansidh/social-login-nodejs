const router = require('express').Router();

router.use('/auth',require('../controlers/auth/signin'));
router.use('/movies',require('../controlers/movie/movie'));

module.exports = router