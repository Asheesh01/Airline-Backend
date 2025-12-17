const express=require("express");
const router=express.Router();
const {AirplaneController}=require('../../controllers')
// api/v1/airplanes POST Request
const {AirplanesMiddleware}=require("../../middleware")
 router.post('/',AirplanesMiddleware.CreationMiddleware,AirplaneController.CreateAirplane);
  router.get('/:id',AirplaneController.getAirplane);
 router.get('/',AirplaneController.getAirplanes);
 router.get('/',AirplaneController.getAirplanes);
router.delete('/:id',AirplaneController.destroyAirplane);
router.patch('/:id',AirplaneController.updateairplane)
 module.exports=router;