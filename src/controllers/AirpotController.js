const { StatusCodes } = require('http-status-codes');
const AppErrors = require("../utils/errors/app-error")
const { SuccessREsponse, ErrorResponse } = require('../utils/common');
const {AirpotsService}=require('../services')
const Airpot=require('../models/airpot');

async function CreateAirpot(req, res) {
    try {

        const airpot = await AirpotsService.CreateAirpot({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        SuccessREsponse.data = airpot
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

async function getAirpots(req, res) {
    try {
        const airpots = await AirpotsService.getAirpot();
        SuccessREsponse.data = airpots;
        return res.
            status(StatusCodes.OK)
            .json(SuccessREsponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);

    }
}
async function getAirpot(req, res) {
    try {
        const airpot = await AirpotsService.getAirpot(req.params.id);
        SuccessREsponse.data = airpot;
        return res.
            status(StatusCodes.OK)
            .json(SuccessREsponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);

    }
}

async function destroyAirpot(req, res) {
    try {
        const airpots = await AirpotsService.destroyAirpot(req.params.id);
        SuccessREsponse.data = airpots;
        return res.
            status(StatusCodes.OK)
            .json(SuccessREsponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}


module.exports = {
    CreateAirpot,
    getAirpots,
    getAirpot

}