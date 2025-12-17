const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function CreateAirplane(data) {
    try {
        return await airplaneRepository.create(data);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(
            'Cannot create a new Airplane Object',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplanes() {
    try {
        return await airplaneRepository.getAll();
    } catch (error) {
        throw new AppError(
            'Cannot fetch airplanes',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;

    } catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Status Code you requested is not Present')
        }
        throw new AppError(
            'Cannot fetch airplanes',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id);
        return airplane;
    } catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Status Code you requested to delete  is not Present')
        }
        throw new AppError('The Status Code you requested is not Present')
    }
}

async function update(id) {
    try {
        const response = await airplaneRepository.update(id);
        return response;
    }
    catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Status Code you requested to delete  is not Present')
        }
        throw new AppError('The Status Code you requested is not Present')
    }

}
module.exports = {
    CreateAirplane,
    getAirplanes, getAirplane, destroyAirplane, update
};
