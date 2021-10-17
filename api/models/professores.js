'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.hasMany(models.Materias, {
        foreignKey: 'id_professores'
      })
      Professores.hasMany(models.Notas, {
        foreignKey: 'id_professores'
      })
      
    }
  };
  Professores.init({
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};