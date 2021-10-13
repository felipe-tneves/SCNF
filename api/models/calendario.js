'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calendario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calendario.belongsTo(models.ADMs, {
        foreignKey: 'id_calendario'
      })
      Calendario.belongsTo(models.Professores, {
        foreignKey: 'id_calendario'
      })
      Calendario.belongsTo(models.Alunos, {
        foreignKey: 'id_calendario'
      })
    }
  };
  Calendario.init({
    dataPeriodoEscolar: DataTypes.STRING,
    dataAvaliacoes: DataTypes.STRING,
    dataNotasProfessores: DataTypes.STRING,
    datas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Calendario',
  });
  return Calendario;
};