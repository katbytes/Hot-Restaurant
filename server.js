var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];
var waitlist = [];


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function (req, res) {
  res.send("Welcome to the Star Wars Page!")
});

app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

app.post("/api/tables", function (req, res) {
  var newRes = req.body;
  console.log(newRes);

  if (tables.length < 5) {
    tables.push(newRes);
  } else {
    waitlist.push(newRes);
  };

  res.json(newRes);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});



