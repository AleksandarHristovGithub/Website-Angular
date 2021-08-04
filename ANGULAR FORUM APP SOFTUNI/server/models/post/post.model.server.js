var mongoose = require('mongoose');
var postSchema = require('./post.schema.server');

var userModel = require('../user/user.model.server');
var postModel = mongoose.model("posts", postSchema);

postModel.createPost = createPost;
postModel.findAllPosts = findAllPosts;
postModel.findAllPostsForUser = findAllPostsForUser;
postModel.findPostById = findPostById;
postModel.updatePost = updatePost;
postModel.deletePost = deletePost;

module.exports = postModel;

function createPost(userId, post) {
  return postModel.create(post)
    .then((post) => {
      userModel.findUserById(userId)
        .then((user) => {
          user.posts.push(post);
          userModel.updateUser(userId, user);
        });
      return post;
    });
}

function findAllPosts() {
  return postModel.find();
}

function findAllPostsForUser(userId) {
  return postModel.find({userId: userId});
}

function findPostById(id) {
  return postModel.findOne({_id: id});
}

function updatePost(id, post) {
  return postModel.findByIdAndUpdate(id, post).then();
}

function deletePost(id) {
  return postModel.findOneAndDelete({_id: id});
}

