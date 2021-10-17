'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cursos.belongsTo(models.Campus, {
        foreignKey: 'id_campus'
      })
      Cursos.hasMany(models.Matriculas, {
        foreignKey: 'id_cursos'
      })
      Cursos.hasMany(models.Alunos, {
        foreignKey: 'id_cursos'
      })
      Cursos.hasMany(models.Materias, {
        foreignKey: 'id_cursos'
      })
      Cursos.hasMany(models.Turmas, {
        foreignKey: 'id_cursos'
      })
    }
  };
  Cursos.init({
    nome: DataTypes.STRING,
    duracao: DataTypes.FLOAT,
    observacoes: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};