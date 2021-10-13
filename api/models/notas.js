'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notas.hasMany(models.Materias, {
        foreignKey: 'id_notas'
      })
    }
  };
  Notas.init({
    np1: DataTypes.FLOAT,
    np2: DataTypes.FLOAT,
    trabalhos: DataTypes.FLOAT,
    exame: DataTypes.FLOAT,
    sub: DataTypes.FLOAT,
    projInter: DataTypes.FLOAT,
    media: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Notas',
  });
  return Notas;
};