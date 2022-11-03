const express = require("express");

const {httpGetAllLaunches} = require("../controller/launcher.controller");

const launchesRouter = express.Router();

launchesRouter.get('/',httpGetAllLaunches);

module.exports = launchesRouter