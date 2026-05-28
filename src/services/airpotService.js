const { AirpoteRepository } = require('../repositories')
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error');
const airpotRepository = new AirpoteRepository();

async function CreateAirpots(data) {
    try {
        return await airpotRepository.create(data);
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(
            'Cannot create a new Airpot Object',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirpots() {
    try {
        return await airpotRepository.getAll();
    } catch (error) {
        throw new AppError(
            'Cannot fetch Airpots',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirpot(id) {
    try {
        const Airpot = await airpotRepository.get(id);
        return Airpot;

    } catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Status Code you requested is not Present')
        }
        throw new AppError(
            'Cannot fetch Airpots',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyAirpots(id) {
    try {
        const Airpot = await airpotRepository.destroy(id);
        return Airpot;
    } catch (error) {
        if (error.StatusCodes == StatusCodes.NOT_FOUND) {
            throw new AppError('The Status Code you requested to delete  is not Present')
        }
        throw new AppError('The Status Code you requested is not Present')
    }
}

async function updatesAirpots(id, data) {
    try {
        const response = await airpotRepository.update(id, data);
        if (response[0] === 0) {
            throw new AppError(
                'City not found',
                StatusCodes.NOT_FOUND
            );
        }
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
    CreateAirpots,
    getAirpots, getAirpots, destroyAirpots, updatesAirpots
};

