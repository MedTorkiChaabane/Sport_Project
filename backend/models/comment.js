const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
 content:{type:String, required:true} ,
 userId: {
 type: mongoose.Schema.Types.ObjectId,
 ref: "User"
 },
 matchId:{
 type: mongoose.Schema.Types.ObjectId,
 ref: "Match"
 },
});
const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;