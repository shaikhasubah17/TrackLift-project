const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exerciseName: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
        required: true
    }
    
}, {timestamps: true});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
