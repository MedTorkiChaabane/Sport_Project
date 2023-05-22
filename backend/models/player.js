const mongoose= require("mongoose");
// Schema
const playerSchema= mongoose.Schema({
    name: String,
    age: Number,
    number: Number,
    position: String,
    teamId: String,

});
// Model Name ( collection "players" will be created/generated)
const player = mongoose.model("Player", playerSchema);
// Make file exportable
module.exports = player;