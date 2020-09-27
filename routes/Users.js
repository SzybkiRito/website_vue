const express = require("express");
const router = express.Router();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const client = require("../index");
router.use(cors());

const User = require("../models/Users");

router.post("/register", (req, res) => {
  const UserData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
  };

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          UserData.password = hash;
          User.create(UserData)
            .then((user) => {
              res.json({ status: user.email + " registered" });
            })
            .catch((err) => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send("User logged in");
        } else {
          res.json({ erorr: "Wrong Password or username" });
        }
      } else {
        res.json({ erorr: "User doesnt exists" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/get_avatar", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        res.send(`${user.avatar}`);
      } else {
        res.json({ error: "Cannot find any user" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/new_avatar", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { avatar: req.body.avatar },
    { new: true }
  )
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.json({ error: "Cannot find any user" });
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = router;
