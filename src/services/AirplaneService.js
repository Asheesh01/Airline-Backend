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

module.exports = {
  CreateAirplane,
  getAirplanes
};
