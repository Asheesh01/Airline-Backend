const CrudRepository=require('./crud-repositeries');
const airpot = require('../models/airpot');
class AirpotRespository extends CrudRepository{
    constructor(){
        super(airpot)
    }
}

module.exports=AirpotRespository;