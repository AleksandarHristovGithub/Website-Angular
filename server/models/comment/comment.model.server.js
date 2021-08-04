var mongoose = require('mongoose');
var commentSchema = require('./comment.schema.server');

var userModel = require('../user/user.model.server');
var postModel = require('../post/post.model.server');
var commentModel = mongoose.model("Comments", commentSchema);

commentModel.createComment = createComment;
commentModel.findAllComments = findAllComments;
commentModel.findAllCommentsForPost = findAllCommentsForPost;
commentModel.findCommentById = findCommentById;
commentModel.updateComment = updateComment;
commentModel.deleteComment = deleteComment;

module.exports = commentModel;

function createComment(postId, comment) {
  return commentModel.create(comment)
    .then((comment) => {
      postModel.findPostById(postId)
        .then((post) => {
          post.comments.push(comment);
          postModel.updatePost(postId, post);
        });
      return comment;
    });
}

function findAllComments() {
  return commentModel.find();
}

function findAllCommentsForPost(postId) {
  return commentModel.find({postId: postId});
}

function findCommentById(id) {
  return commentModel.findById(id);
}

function updateComment(id, comment) {
  return commentModel.findByIdAndUpdate(id, comment).then();
}

function deleteComment(id) {
  return commentModel.findOneAndDelete({_id: id});
}

