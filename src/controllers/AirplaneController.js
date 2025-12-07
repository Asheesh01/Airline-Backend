const { error } = require('cli');
const { AirplanceServices } = require('../services');
  console.log("Inside Airplane controller");
const { StatusCodes } = require('http-status-codes');
async function CreateAirplane(req, res) {
    try {
      
        const response = await AirplanceServices.CreateAiplane({

             modelNumber: req.body.modelNumber,
             capacity: req.body.capacity
        });
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: "Successfully Created",
                data: response,
                error: {}
            });
    }
    catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "Unsuccessfully Created",
                data: {},
                error: error
            });
    }
}
module.exports = {
    CreateAirplane
}