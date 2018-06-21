var express = require('express');
const app = express();
const bodyParser = require('body-parser')
const passport = require('passport');
const GoogleTokenStrategy = require('passport-google-id-token');
const KEYS = require('./keysConfig')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,user_id');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(require('./src/controlers/index'))

app.listen(3001,()=>console.log("server started"))