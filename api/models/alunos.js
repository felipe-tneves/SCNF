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
      Alunos.belongsTo(models.Campus, {
        foreignKey: 'id_campus'
      })
      Alunos.belongsTo(models.Matriculas, {
        foreignKey: 'id_matriculas'
      })
      Alunos.belongsTo(models.Cursos, {
        foreignKey: 'id_cursos'
      })
      Alunos.belongsTo(models.Materias, {
        foreignKey: 'id_materias',
        type: DataTypes.ARRAY(DataTypes.INTEGER)
      })
      Alunos.belongsTo(models.Infos, {
        foreignKey: 'id_infos'
      })
      Alunos.hasMany(models.Notas, {
        foreignKey: 'id_alunos'
      })
      Alunos.belongsTo(models.Calendarios, {
        foreignKey: 'id_calendarios'
      })
      Alunos.belongsTo(models.Turmas, {
        foreignKey: 'id_turmas'
      })
      Alunos.hasOne(models.Trancamentos, {
        foreignKey: 'id_alunos'
      })
      Alunos.hasOne(models.Transferencias, {
        foreignKey: 'id_alunos'
      })
    }
  };
  Alunos.init({
    senha: DataTypes.STRING,
    ra: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    tipoIngresso: DataTypes.STRING,
    instituicaoOrigem: DataTypes.STRING,
    rendaFamiliar: DataTypes.DECIMAL,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alunos',
  });
  return Alunos;
};