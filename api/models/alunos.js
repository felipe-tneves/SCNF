'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Alunos.hasMany(models.ADMs, {
        foreignKey: 'id_aluno'
      })
      Alunos.hasMany(models.Turmas, {
        foreignKey: 'id_turma'
      })
      Alunos.belongsTo(models.Matriculas, {
        foreignKey: 'id_matricula'
      })
      Alunos.belongsTo(models.Calendarios, {
        foreignKey: 'id_calendario'
      })
      Alunos.belongsTo(models.Infos, {
        foreignKey: 'id_infos'
      })
    }
  };
  Alunos.init({
    tipoIngresso: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};