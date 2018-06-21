var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const User = new Schema({
    _id: Number,
    name: String,
    email: String,
    mobile: String,
    token: String,
    bookmarks: [{movie_id: String}],
    favorite: [{movie_id: String}]
});

module.exports = User