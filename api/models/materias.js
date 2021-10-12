'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Materias.init({
    nome: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    frequencia: DataTypes.FLOAT,
    numerosAulas: DataTypes.INTEGER,
    dataMateria: DataTypes.DATEONLY,
    statusMateria: DataTypes.BOOLEAN,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};