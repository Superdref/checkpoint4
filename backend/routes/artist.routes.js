require("dotenv").config();

const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();

const Event = require("../sequelize/models/events");
const Artist = require("../sequelize/models/artists");

router.get("/", (req, res) => {
  Artist.findAll()
    .then(artists => res.status(200).json(artists))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Artist.findOne({
    where: {
      uuid: id
    }
  })
    .then(artists => {
      res.status(200).json(artists);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
