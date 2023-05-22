const mongoose= require("mongoose");
// Schema
const teamSchema= mongoose.Schema({
  name: String,
  owner: String,
  foundation: Number,
  staduimId: String,
});
// Model Name ( collection "teams" will be created/generated)
const team = mongoose.model("Team", teamSchema);
// Make file exportable
module.exports = team;