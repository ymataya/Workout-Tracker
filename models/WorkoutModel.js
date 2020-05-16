const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter workout type"  
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for workout"
            },
            duration: {
                type: Number,
                required: "Enter workout duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
        // Object
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout
