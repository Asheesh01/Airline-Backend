const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function CreateAiplane(data) {
    try {
        console.log("Inside airpnae services")
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    CreateAiplane
}