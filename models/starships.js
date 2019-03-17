const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const starshipsSchema = new Schema({

});

const starships = mongoose.model("starships", starshipsSchema);
module.exports = starships;