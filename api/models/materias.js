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
      Materias.hasMany(models.Professores, {
        foreignKey: 'id_professor'
      })
      Materias.hasMany(models.Cursos, {
        foreignKey: 'id_curso'
      })
      Materias.hasMany(models.Alunos, {
        foreignKey: 'id_aluno'
      })
      Materias.belongsTo(models.Notas, {
        foreignKey: 'id_notas'
      })
    }
  };
  Materias.init({
    nome: DataTypes.STRING,
    cargaHoraria: DataTypes.STRING,
    frequencia: DataTypes.FLOAT,
    numerosAulas: DataTypes.INTEGER,
    dataMateria: DataTypes.STRING,
    statusMateria: DataTypes.BOOLEAN,
    observacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};