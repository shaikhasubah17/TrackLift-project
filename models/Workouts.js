const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  workoutName: {
    type: String,
    required: true
  },
 experienceLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
}, 
  workoutEquipment: {
    type: String,
    required: true
  },
  workoutDuration: {
    type: String,
    required: true
  }, 
  date: { 
    type: Date,
    required: true
  }, 
  workoutRating: { 
    type: Number,
    min: 1,
    max: 5,
    required: true
  }


}, {timestamps: true});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
