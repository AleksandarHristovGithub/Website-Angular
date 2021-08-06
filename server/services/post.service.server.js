module.exports = app => {

  var postModel = require('../models/post/post.model.server');

  app.post("/api/user/:uid/post", createPost);
  app.get("/api/posts", findAllPosts);
  app.get("/api/user/:uid/post", findAllPostsForUser);
  app.get("/api/post/:pid", findPostById);
  app.put("/api/post/:pid", updatePost);
  app.delete("/api/post/:pid", deletePost);

  function createPost(req, res) {
    const uid = req.params['uid'];
    var post = req.body;
    postModel.createPost(uid, post)
      .then((post) => {
        res.json(post);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllPosts(req, res) {
    postModel.findAllPosts().then((posts) => {
      res.json(posts);
    }, (error) => {
      res.status(400).send(error);
    });
  }

  function findAllPostsForUser(req, res) {
    const uid = req.params['uid'];
    postModel.findAllPostsForUser(uid)
      .then((posts) => {
        res.json(posts);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findPostById(req, res) {
    const pid = req.params['pid'];
    postModel.findPostById(pid)
      .then((post) => {
        res.json(post);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function updatePost(req, res) {
    const pid = req.params["pid"];
    var post = req.body;
    postModel.updatePost(pid, post)
      .then(post => {
        res.json(post);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deletePost(req, res) {
    const pid = req.params["pid"];
    postModel.deletePost(pid)
      .then((post) => {
        res.json(post);
      }, (error) => {
        res.status(400).send(error);
      });
  }

};
