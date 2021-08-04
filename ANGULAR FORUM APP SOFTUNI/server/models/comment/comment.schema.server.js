var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
  postId: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},
  username: String,
  content: String,
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'comments'});

module.exports = commentSchema;
