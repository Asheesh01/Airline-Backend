const express=require("express")
const{InfoControler}=require('../../controllers');
const AirplaneRoutes=require('./AirplaneRotes')
const router=express.Router();
const CityRoutes=require('./City-Routes')
router.use('/airplanes',AirplaneRoutes)
router.use('/City',CityRoutes)
router.get('/info',InfoControler.info);
module.exports=router;