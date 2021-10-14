'use strict';
const {
  Model
} = require('sequelize');
const materias = require('./materias');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculas.hasMany(models.ADMs, {
        foreignKey: 'id_matricula'
      })
      Matriculas.belongsTo(models.Transferencias, {
        foreignKey: 'id_transferencia'
      })
    }
  };
  Matriculas.init({
    statusMatricula: DataTypes.BOOLEAN,
    dataInicioCurso: DataTypes.DATEONLY,
    dataTerminoCurso: DataTypes.DATEONLY,
    dataTrancamento: DataTypes.DATEONLY,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};