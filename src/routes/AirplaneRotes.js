const express=require("express");
const router=express.Router();
const {AirplaneController}=require('../controllers')
// api/v1/airplanes POST Request
console.log("Inside airplanes routes")
 router.post('/',AirplaneController.CreateAirplane);
 module.exports=router;