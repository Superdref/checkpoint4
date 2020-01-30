require("dotenv").config();

const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();

const Event = require("../sequelize/models/events");
const User = require("../sequelize/models/users");
const Artist = require("../sequelize/models/artists");

router.get("/", (req, res) => {
  Event.findAll()
    .then(events => res.status(200).json(events))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Event.findOne({
    where: {
      uuid: id
    }
  })
    .then(events => {
      res.status(200).json(events);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
