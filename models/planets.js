const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// seems like it has to be string for most because of the "unknowns" in the API. good thing I caught this early on!
// name, rotation_period, orbital_period, diameter, climate, gravity, terrain(use arrays for fun), surface_water, population
const planetsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rotation_period: {
    type: String,
    required: true
  },
  orbital_period: {
    type: String,
    required: true
  },
  diameter: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  gravity: {
    type: String,
    required: true
  },
  terrain: Array,
  surface_water: String
});

const planets = mongoose.model("planets", planetsSchema);

module.exports = planets;