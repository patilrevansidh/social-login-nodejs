const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/moviedb', function (err) {
   
    if (err) throw err;
    
    console.log('Successfully connected');
});

module.exports = mongoose;