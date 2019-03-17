const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

// define character schema
// name, height, mass, hair_color, skin_color, eye_color, birth_year, gender
const charactersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  mass: {
    type: Number,
    required: true
  },
  hair_color: {
    type: String,
    required: true
  },
  skin_color: {
    type: String,
    required: true
  },
  eye_color: {
    type: String,
    required: true
  },
  birth_year: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required
  }
});

const characters = mongoose.model("characters", charactersSchema);
module.exports = characters; 