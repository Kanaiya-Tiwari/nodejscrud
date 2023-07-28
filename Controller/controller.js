const  User  = require("../model/model");

const getUser = async (req, res) => {
  try {

    let result = await User.find();
    
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Error fetching customers" });
  }
};
const getUserByID = async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Error fetching customers" });
  }
};
const createUser = async (req, res) => {
  try {
    console.log(req.body);
    let user = new User(req.body);
   
    const createuser= await user.save();
    res.status(201).json(createuser);
  } catch (err) {
    res.status(500).json({ message: "Error creating customers" });
  }
};
const deleteUser = async (req, res) => {
  try {

    let userData=await User.findByIdAndDelete(req.params.id);
  if(userData){
    res.status(200).json({message:"User delete sucessly"});
  }
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

const updateUser = async (req, res) => {
  try {
    let userData=await User.findByIdAndUpdate(req.params.id, req.body,{
      new:true
    });
    if(userData){
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};



module.exports = { getUser,getUserByID,createUser,deleteUser,updateUser };
