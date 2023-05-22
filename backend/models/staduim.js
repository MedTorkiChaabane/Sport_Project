// import mongoose module
const mongoose= require("mongoose");
// Schema
const staduimSchema= mongoose.Schema({
   name:String,
   capacity:Number,
   city:String,
});
// Model Name ( collection "staduims" will be created/generated)
const staduim = mongoose.model("Staduim", staduimSchema);
// Make file exportable
module.exports = staduim;