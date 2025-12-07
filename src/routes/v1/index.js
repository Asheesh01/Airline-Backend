const express=require("express")
const{InfoControler}=require('../../controllers');
const AirplaneRoutes=require('../AirplaneRotes')
const router=express.Router();
console.log("Inside v1 roites");
router.use('/airplanes',AirplaneRoutes)
router.get('/info',InfoControler.info);
module.exports=router;