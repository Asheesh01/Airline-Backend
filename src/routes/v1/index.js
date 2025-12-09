const express=require("express")
const{InfoControler}=require('../../controllers');
const AirplaneRoutes=require('../AirplaneRotes')
const router=express.Router();

router.use('/airplanes',AirplaneRoutes)
router.get('/info',InfoControler.info);
module.exports=router;