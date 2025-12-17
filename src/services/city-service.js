const {CityRepository}=require('../repositories');
const AppError=require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes')

const cityRepository=new CityRepository();
async function CreateCity(data){
    try{
        const response=await cityRepository.create(data);
    return response;
    }
    catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const explanation = error.errors.map(err => err.message);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }

        throw new AppError(
            'Cannot create a new City Object',
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }

}
module.exports={
    CreateCity
}