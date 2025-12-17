const { response } = require('express');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error')
const { StatusCodes } = require('http-status-codes')

const cityRepository = new CityRepository();
async function CreateCity(data) {
    try {
        const response = await cityRepository.create(data);
        return response;
    }
    catch (error) {

        if (error.name === 'SequelizeValidationError' || 'SequelizeUniqueConstraintError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(
            'Cannot create a new City Object',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }

}
async function deleteCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The City is not present')
        }
        throw new AppError('The City you requested is not Present')
    }

}


async function updateCity(id,data) {
    try{
        const response =await cityRepository.update(id,data);
    return response;
    }catch(error){
        console.log(error)
        if(error.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError('The City is not present')
        }
        throw new AppError('The City you requested is not updated')
    }
    
}
module.exports = {
    CreateCity, 
    deleteCity,
    updateCity
}