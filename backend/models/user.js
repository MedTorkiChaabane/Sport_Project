// import mongoose module
const mongoose= require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
// Schema
const userSchema= mongoose.Schema({
   firstName:{ type: String, required: true },
   lastName: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   pwd:{ type: String, required: true },
   role:String,
   tel:Number,
   img:String,

});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
// Model Name ( collection "users" will be created/generated)
const user = mongoose.model("User", userSchema);
// Make file exportable
module.exports = user;