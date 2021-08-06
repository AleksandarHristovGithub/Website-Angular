module.exports = app => {

  var commentModel = require('../models/comment/comment.model.server');

  app.post("/api/post/:pid/comment-list", createComment);
  app.get("/api/comments", findAllComments);
  app.get("/api/post/:pid/comment-list", findAllCommentsForPost);
  app.get("/api/comment-list/:cid", findCommentById);
  app.put("/api/comment-list/:cid", updateComment);
  app.delete("/api/comment-list/:cid", deleteComment);

  function createComment(req, res) {
    const pid = req.params['pid'];
    var comment = req.body;
    commentModel.createComment(pid, comment)
      .then((comment) => {
        res.json(comment);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllComments(req, res) {
    commentModel.findAllComments().then((comments) => {
      res.json(comments);
    }, (error) => {
      res.status(400).send(error);
    });
  }

  function findAllCommentsForPost(req, res) {
    const pid = req.params['pid'];
    commentModel.findAllCommentsForPost(pid)
      .then((comments) => {
        res.json(comments);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findCommentById(req, res) {
    const cid = req.params['cid'];
    commentModel.findCommentById(cid)
      .then((comment) => {
        res.json(comment);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function updateComment(req, res) {
    const cid = req.params['cid'];
    var comment = req.body;
    commentModel.updateComment(cid, comment)
      .then(comment => {
        res.json(comment);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deleteComment(req, res) {
    const cid = req.params['cid'];
    commentModel.deleteComment(cid)
      .then((comment) => {
        res.json(comment);
      }, (error) => {
        res.status(400).send(error);
      });
  }

};
