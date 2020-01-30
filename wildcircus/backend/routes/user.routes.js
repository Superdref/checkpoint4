require("dotenv").config();

const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();

const Event = require("../sequelize/models/events");
const User = require("../sequelize/models/users");
const Artist = require("../sequelize/models/artists");
