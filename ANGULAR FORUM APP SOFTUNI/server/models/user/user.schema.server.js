var mongoose = require('mongoose');
var postSchema = require('../post/post.schema.server');

var userSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String
  },
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  state: String,
  country: String,
  type: String,
  posts: [postSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'users'});

module.exports = userSchema;
