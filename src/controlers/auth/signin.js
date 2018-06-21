const router = require('express').Router();
const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-id-token');
const KEYS = require('../../../keysConfig')

passport.use(new GoogleTokenStrategy({
    clientID: KEYS.GOOGLE
  },
  function(accessToken, refreshToken, profile, done) {
      console.log("accessToken",accessToken),
      console.log("profile",profile)      
  }
));

router.get('/google', passport.authenticate('google-id-token'),(req,res)=>{
  res.send("ff")
});

router.get('/otp',(req,res)=>{

});

module.exports = router