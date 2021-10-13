'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.ADMs, {
        foreignKey: 'id_turma'
      })
      Turmas.belongsTo(models.Professores, {
        foreignKey: 'id_professor'
      })
      Turmas.belongsTo(models.Alunos, {
        foreignKey: 'id_aluno'
      })
    }
  };
  Turmas.init({
    codigo: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    periodo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};