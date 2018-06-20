var express = require('express');
const app = express();
const bodyParser = require('body-parser')
const passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// var GoogleStrategy = require('passport-google-oauth2').Strategy;
// const route = require('express');
var GoogleTokenStrategy = require('passport-google-id-token');


const CLIENT_ID = "401469086263-0edqhedsh791l80lnunqhosv7jsj477m.apps.googleusercontent.com";
const CLIENT_SCRETE = "EzrVv99qciDjW27nk2cEMjko";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,user_id');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

passport.use(new GoogleTokenStrategy({
  clientID: CLIENT_ID,
  // clientSecret: CLIENT_SCRETE,
  // callbackURL: "http://localhost:3000"
},
function(accessToken, refreshToken, profile, next) {
    console.log("accessToken",accessToken),
    console.log("profile",profile)  
    next(profile)
}
));

app.get('/auth/google', passport.authenticate('google-id-token'),(req,res)=>{
  res.send("ff")
});


app.listen(3001,()=>console.log("server started"))