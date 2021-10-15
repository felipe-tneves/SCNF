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
      Calendarios.hasOne(models.ADMs, {
        foreignKey: 'id_calendario'
      })
      Calendarios.hasOne(models.Professores, {
        foreignKey: 'id_calendario'
      })
      Calendarios.hasOne(models.Alunos, {
        foreignKey: 'id_calendario'
      })
    }
  };
  Calendarios.init({
    dataPeriodoEscolar: DataTypes.STRING,
    dataAvaliacoes: DataTypes.STRING,
    dataNotasProfessores: DataTypes.STRING,
    datas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Calendarios',
  });
  return Calendarios;
};