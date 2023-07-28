const express=require('express');
const router=express.Router()
const {getUser,getUserByID,createUser,deleteUser,updateUser} = require("../Controller/controller")

router.route("/users").get(getUser);
router.route("/users/:id").get(getUserByID);
router.route("/users").post(createUser);
router.route("/users/:id").delete(deleteUser);
router.route("/users/:id").put(updateUser)

module.exports=router;

