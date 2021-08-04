var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model("users", userSchema);

userModel.createUser = createUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserById = findUserById;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findUserByFacebook = findUserByFacebook;
userModel.findAllUsers = findAllUsers;

module.exports = userModel;

function createUser(user) {
  return userModel.create(user);
}

function findAllUsers() {
  return userModel.find();
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

function findUserByUsername(username) {
  return userModel.findOne({username: username});
}

function findUserById(id) {
  return userModel.findOne({_id: id});
}

function updateUser(id, user) {
  return userModel.findByIdAndUpdate(id, user, {new: true})
    .then();
}

function deleteUser(id) {
  return userModel.findOneAndDelete({_id: id});
}

function findUserByFacebook(facebook) {
  return userModel.findOne({'facebook.id': facebook});
}
