'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materias.belongsTo(models.Cursos, {
        foreignKey: 'id_cursos'
      })
      Materias.belongsTo(models.Turmas, {
        foreignKey: 'id_turmas'
      })
      Materias.belongsTo(models.Professores, {
        foreignKey: 'id_professores'
      })
      Materias.hasMany(models.Alunos, {
        foreignKey: 'id_materias'
      })
      Materias.hasMany(models.Notas, {
        foreignKey: 'id_materias'
      })
    }
  };
  Materias.init({
    nome: DataTypes.STRING,
    cargaHoraria: DataTypes.FLOAT,
    frequencia: DataTypes.FLOAT,
    numerosAulas: DataTypes.FLOAT,
    status: {type: DataTypes.ENUM, values:['ativo', 'cursando', 'concluido', 'DP']},
    diasMateria: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};