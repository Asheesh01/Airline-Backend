const { AirplanceServices } = require('../services');
const { StatusCodes } = require('http-status-codes');
const{SuccessREsponse,ErrorResponse}=require('../utils/common');
const airplane = require('../models/airplane');
async function CreateAirplane(req, res) {
    try {
        
        const airplane = await AirplanceServices.CreateAirplane({
             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity
            
        });
         SuccessREsponse.data=airplane
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessREsponse);
    }
    catch (error) {
        ErrorResponse.error=error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}
module.exports = {
    CreateAirplane
}