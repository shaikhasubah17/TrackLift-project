const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
    
  }, 
  restTime: { 
    type: Number,
    required: true
  }, 
  completed: { 
    type: Boolean,
    required: true
  }

}, {timestamps: true});

const information = mongoose.model("information", informationSchema);

module.exports = information; 
