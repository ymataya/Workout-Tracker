const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "mongodb://localhost:27017/workouts";
const workouts = [""];

const db = mongojs(databaseUrl, workouts);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.post("/api/workouts", (req, res) => {
  console.log("hitting Route");
  console.log(req.body);
  console.log(req.params);
  
});

app.put ("/api/workouts/:id", (req, res) => {
  console.log("Hitting Route with id");
  console.log(req.params);
  console.log(req.body);

})


app.listen(3000, () => {
  console.log("App running on port 3000!");
});
