const { AirplaneServices } = require('../services');
const { StatusCodes } = require('http-status-codes');
const AppErrors=require("../utils/errors/app-error")
const { SuccessREsponse, ErrorResponse } = require('../utils/common');
const airplane = require('../models/airplane');
async function CreateAirplane(req, res) {
    try {

        const airplane = await AirplaneServices.CreateAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity

        });
        SuccessREsponse.data = airplane 
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessREsponse);
    } 
    catch (error) {
    if (error instanceof AppErrors) {
        ErrorResponse.error = 
        {
              statusCode: error.statusCode,
              explanation: error.explanation
        } 
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }

   
     ErrorResponse.error = {
            statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            explanation: "Something went wrong"
        };
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorResponse);
}
}

async function getAirplanes(req,res) {
   try{
        const airplanes1=await AirplaneServices.getAirplanes();
        SuccessREsponse.data=airplanes1;
         return res.
        status(StatusCodes.OK)
            .json(SuccessREsponse);
    }catch(error){
        ErrorResponse.error = error;
         return res
             .status(error.statusCode)
            .json(ErrorResponse);
       
    }
}
module.exports = {
    CreateAirplane,
    getAirplanes
}