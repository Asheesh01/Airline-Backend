
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    sequelize,
    modelNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
    isAlphanumeric: {
      msg: "Model number must contain only letters and numbers"
    }
  }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        max: {
          args: [1000],
          msg: "Capacity cannot be more than 1000"
        }

      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};