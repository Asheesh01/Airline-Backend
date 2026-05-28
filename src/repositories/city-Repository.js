const CrudRepository = require('./crud-repositeries');
const  city  = require('../models/city');
class cityRepository extends CrudRepository {
    constructor() {
        super(city)
    }
}
module.exports = cityRepository;