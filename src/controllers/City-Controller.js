const { StatusCodes } = require('http-status-codes')
const { CityService } = require('../services')
const { SuccessREsponse, ErrorResponse } = require('../utils/common')
async function CreateCity(req, res) {
    try {
        const response = await CityService.CreateCity({
            name: req.body.name
        })
        SuccessREsponse.data = response
        return res.
            status(StatusCodes.CREATED)
            .json(SuccessREsponse);
    } catch (error) {

        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function citydestroy(req, res) {
    try {
        const response = await CityService.deleteCity(req.params.id);
        SuccessREsponse.data=response
        return res.
                  status(StatusCodes.OK)
                  .json(SuccessREsponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);

    }
}

async function updateCitys(req,res) {
    try{
         const CityId=req.params.id;
        const data=req.body;
        const response=await CityService.updateCity(CityId,data);
    SuccessREsponse.data=response
    return res.
             status(StatusCodes.OK)
             .json(SuccessREsponse)
    }catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);

    }
    
}

module.exports = {
    CreateCity,
    citydestroy,
    updateCitys
}