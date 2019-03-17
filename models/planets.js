const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planetsSchema = new Schema({

});

const planets = mongoose.model("planets", planetsSchema);

module.exports = planets;