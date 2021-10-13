'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Campus.hasMany(models.ADMs, {
        foreignKey: 'id_campus'
      })
    }
  };
  Campus.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING,
    telefone: DataTypes.STRING,
    quantAlunos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Campus',
  });
  return Campus;
};