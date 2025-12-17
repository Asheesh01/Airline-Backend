const express=require("express");
const {CityController}=require('../../controllers');
const router = express.Router();
const{CityMiddleware}=require('../../middleware')
router.post('/',CityMiddleware.CreateCityMiddleware,CityController.CreateCity);
router.delete('/:id',CityController.citydestroy)
router.patch('/:id',CityController.updateCitys)
module.exports=router;