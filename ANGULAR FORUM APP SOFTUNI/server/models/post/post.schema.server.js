var mongoose = require('mongoose');
var commentSchema = require('../comment/comment.schema.server');

var postSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  title: String,
  content: String,
  imagePath: String,
  username: String,
  comments: [commentSchema],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'posts'});

module.exports = postSchema;
