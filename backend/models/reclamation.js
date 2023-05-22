// import mongoose module
const mongoose= require("mongoose");
// Schema
const reclamationSchema= mongoose.Schema({
  
    subject: String,
    description: String,
    userId: String,
});
// Model Name ( collection "matches" will be created/generated)
const reclamation = mongoose.model("reclamation", reclamationSchema);
// Make file exportable
module.exports = reclamation;