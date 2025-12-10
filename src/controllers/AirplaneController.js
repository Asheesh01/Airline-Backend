const { AirplanceServices } = require('../services');
const { StatusCodes } = require('http-status-codes');
const AppErrors=require("../utils/errors/app-error")
const { SuccessREsponse, ErrorResponse } = require('../utils/common');
const airplane = require('../models/airplane');
async function CreateAirplane(req, res) {
    try {

        const airplane = await AirplanceServices.CreateAirplane({
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
module.exports = {
    CreateAirplane
}