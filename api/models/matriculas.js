'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Matriculas.belongsTo(models.Campus, {
        foreignKey: 'id_campus'
      })
      Matriculas.belongsTo(models.Cursos, {
        foreignKey: 'id_cursos'
      })
      Matriculas.hasOne(models.Alunos, {
        foreignKey: 'id_matriculas'
      })
    }
  };
  Matriculas.init({
    statusMatricula: DataTypes.BOOLEAN,
    dataInicioCurso: DataTypes.DATEONLY,
    dataTerminoCurso: DataTypes.DATEONLY,
    observacoes: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};