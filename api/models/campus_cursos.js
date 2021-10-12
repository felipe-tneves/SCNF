'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campus_Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Campus_Cursos.init({
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Campus_Cursos',
  });
  return Campus_Cursos;
};