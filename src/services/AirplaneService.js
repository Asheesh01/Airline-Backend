const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const{AppError}=require('../utils/errors/app-error')
const airplaneRepository = new AirplaneRepository();

async function CreateAirplane(data) {
    try {
   
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch (error) {
        console.log(error)
        if(error.name=='ValidationError'){
            throw new AppError('Cannot create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
       throw new AppError('Cannot create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    CreateAirplane
}