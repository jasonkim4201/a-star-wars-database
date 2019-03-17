const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehiclesSchema = new Schema({

});

const veheicles = mongoose.model("vehicles", vehiclesSchema);
module.exports = veheicles;