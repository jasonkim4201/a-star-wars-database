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
    type: String,
    required: true
  },
  mass: {
    type: String,
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
    required: true
  }
});

const characters = mongoose.model("characters", charactersSchema);
module.exports = characters; 