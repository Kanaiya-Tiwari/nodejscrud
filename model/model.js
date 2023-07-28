const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
 name:{
  type:String,
  required:[true,"Name must be provided"]
},
email:{
  type:String,
  required:[true,"Email must be provided"],
  unique:[true,"Email already present"],
  
},
 course:{
  type:String,
  required:[true,"Course must be provided"]
 }
});


module.exports=mongoose.model("User", userSchema);