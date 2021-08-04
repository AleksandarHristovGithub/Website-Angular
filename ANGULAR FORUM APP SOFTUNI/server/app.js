module.exports = app => {
  require("./services/user.service.server")(app);
  require("./services/post.service.server")(app);
  require("./services/comment.service.server")(app);
};
