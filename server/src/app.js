const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const launchesRouter = require("./router/launches.router");
const planetsRouter = require("./router/planets.router");

const app = express();

app.use(cors({origin:'*'}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../public')));
app.use(morgan("combined"));

// app.get('/', function(req,res){
//   res.send('hello')})

app.get("/", (req, res) => {
	res.send('Nasa Project');
});

app.use("/launches", launchesRouter);
app.use("/planets", planetsRouter);


module.exports = app;


