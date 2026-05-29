const express=require("express");
const router=express.Router();
const {AirpotController}=require('../../controllers')
const {AirpotMiddleware}=require('../../middleware')

router.post('/',AirpotMiddleware.CreationMiddleware,AirpotController.CreateAirpot);
  router.get('/:id',AirpotController.getAirpot);
 router.get('/',AirpotController.getAirpots);
router.delete('/:id',AirpotController.destroyAirpot);
 module.exports=router;