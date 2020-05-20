const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const db = require ("./models");
const path = require("path");
const PORT =  process.env.PORT || 4000

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env.MONGODB_URI)
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouts";
//USE FOR LOCAL HOST
console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// HTML ROUTES //
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});


// API ROUTES //
app.get("/api/workouts", (req,res) => {
  db.Workout.find({})
  .then(workout => {
      res.json(workout);
  })
  .catch(err => {
      res.json(err);
  });
})

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(stat => {
      res.json(stat);
  })
  .catch(err => {
      res.json(err);
  });
}); 

app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(addWorkout => res.json(addWorkout))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })   
});

app.put ("/api/workouts/:id", (req,res) => {
  console.log(req.params);
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $set: { exercises: req.body } }
)
    .then(updateWorkout => res.json(updateWorkout))
    .catch(err => {
        console.log("err", err)
        res.json(err)
    })
  })

app.listen(PORT, () => {
  console.log("App running on port" + PORT);
});
