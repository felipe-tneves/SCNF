'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ADMs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     ADMs.belongsTo(models.Infos, {
       foreignKey: 'id_adms'
     })
     ADMs.belongsTo(models.Calendarios,{
       foreignKey: 'id_calendario'
     })
     ADMs.belongsTo(models.Professores, {
       foreignKey: 'id_professor'
     })
     ADMs.belongsTo(models.Alunos, {
       foreignKey: 'id_aluno'
     })
     ADMs.belongsTo(models.Matriculas, {
       foreignKey: 'id_matricula'
     })
     ADMs.belongsTo(models.Campus, {
       foreignKey: 'id_campus'
     })
     ADMs.belongsTo(models.Turmas, {
       foreignKey: 'id_turma'
     })
    }
  };
  ADMs.init({
    cargo: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ADMs',
  });
  return ADMs;
};