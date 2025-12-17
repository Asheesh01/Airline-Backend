const CrudRepository = require('./crud-repositeries');
const { city } = require('../models');


class cityRepository extends CrudRepository {
    constructor() {
        super(city)
    }

}
module.exports = cityRepository;