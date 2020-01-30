require("dotenv").config();

const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();

const Event = require("../sequelize/models/events");
const Artist = require("../sequelize/models/artists");
