const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: Date,
    exercises: [
        Object
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout
