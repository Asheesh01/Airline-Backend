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

module.exports = {
    CreateCity
}