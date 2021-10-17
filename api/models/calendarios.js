const Professores = require('./professores')
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calendarios.hasOne(models.Professores, {
        foreignKey: 'id_calendarios'
      })
      Calendarios.hasOne(models.Alunos, {
        foreignKey: 'id_calendarios'
      })
      Calendarios.hasOne(models.Adms, {
        foreignKey: 'id_calendarios'
      })
    }
  };
  Calendarios.init({
    data: DataTypes.STRING,
    dataPeriodoEscolar: DataTypes.STRING,
    dataAvaliacoes: DataTypes.STRING,
    dataNotasProfessor: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Calendarios',
  });
  return Calendarios;
};