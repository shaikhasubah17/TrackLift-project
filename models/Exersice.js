const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exersiceName: {
    type: String,
    required: true
  },
  muscleGroup: {
    type: String,
    required: true
  },
  equipment: {
    type: String,
    required: true

  }, 
  notes: { 
    type: String,
    required: true
  }
}, {timestamps: true});

const Exersice = mongoose.model("Exersice", exerciseSchema);

module.exports = Exersice;
