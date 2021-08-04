module.exports = app => {

  var userModel = require('../models/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var bcrypt = require('bcrypt-nodejs');

  app.post("/api/user", createUser);
  app.get("/api/user", findUserByUsername);
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user/:uid", findUserById);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);
  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedIn", loggedIn);
  app.get("/api/users", findAllUsers);

  var facebookConfig = {
    clientID: '640512233060690',
    // clientID: '790944381277138',
    // clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: 'cecbf29b509940388f3a8afe266df468',
    // clientSecret: '5323d4f2a73d21a374d1b1e3e69aafbe',
    // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // callbackURL: "https://webdev-cs5610-zhenyuan.herokuapp.com/auth/facebook/callback"
    callbackURL: "https://webdev-group.herokuapp.com/auth/facebook/callback"
  };
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebook(profile.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            lastName: names[1],
            firstName: names[0],
            username: names[0],
            email: profile.emails ? profile.emails[0].value : "",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          userModel.createUser(newFacebookUser)
            .then((user) => {
              return done(null, user);
            });
        }
      });
  }

  // app.get('/auth/facebook', function authenticateFacebook (req, res, next) {
  //     req.session.returnTo = '/#' + req.query.returnTo;
  //     next();
  //   },
  //   passport.authenticate('facebook', {scope: 'email'}));
  // app.get("/auth/facebook/callback", function (req, res, next) {
  //   var authenticator = passport.authenticate('facebook', {
  //     successRedirect: req.session.returnTo,
  //     failureRedirect: '/'
  //   });
  //   delete req.session.returnTo;
  //   authenticator(req, res, next);
  // });

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/#/stream',
    failureRedirect: '/#/login'
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    userModel.findUserById(user._id)
      .then(user => {
        done(null, user);
      });
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      userModel.findUserByUsername(username)
        .then(user => {
          if (user === null) {
            return done(null, false);
          } else if (user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            // console.log("Incorrect Username or Password");
            return done(null, false);
          }
        });
    })
  );

  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user)
      .then((user) => {
        res.json(user);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllUsers(req, res) {
    userModel.findAllUsers().then((users) => {
      res.json(users);
    }, (error) => {
      res.status(400).send(error);
    });
  }

  function findUserByUsername(req, res) {
    const username = req.query["username"];
    var user = null;
    if (username) {
      userModel.findUserByUsername(username)
        .then((user) => {
          res.json(user);
        }, (error) => {
          if (error) {
            res.status(400).send(error);
          }
        });
    }
  }

  function findUserById(req, res) {
    const uid = req.params['uid'];
    userModel.findUserById(uid)
      .then((user) => {
        res.json(user);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findUserByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    var user = null;
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then((user) => {
          res.json(user);
        }, (error) => {
          res.status(400).send(error);
        });
    }
  }

  function updateUser(req, res) {
    const uid = req.params["uid"];
    var user = req.body;
    userModel.updateUser(uid, user)
      .then(user => {
        res.json(user);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deleteUser(req, res) {
    const uid = req.params["uid"];
    userModel.deleteUser(uid)
      .then();
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    // console.log("server", "logout...");
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then((user) => {
        res.json(user);
      });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }


};
