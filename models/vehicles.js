const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//name, model, manufacturer, cost_in_credits, crew, passengers, cargo_capacity, vehicle_class

const vehiclesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  manufacturer: {
      type: String,
      required: true
  },
  cost_in_credits: {
    type: String,
    required: true
  },
  crew: {
    type: String,
    required: true
  },
  passengers: {
    type: String,
    required: true
  },
  cargo_capacity: {
    type: String,
    required: true
  },
  veheicle_class: {
    type: String,
    required: true
  }
});

const veheicles = mongoose.model("vehicles", vehiclesSchema);
module.exports = veheicles;