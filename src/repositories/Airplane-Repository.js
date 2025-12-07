const CrudRepository=require('./crud-repositeries');
const{Airplane} =require('../models');

console.log("Inside airplane repository")
class AirplaneRepository extends CrudRepository{
    constructor(){
         super(Airplane)
}

    }
       module.exports=AirplaneRepository;