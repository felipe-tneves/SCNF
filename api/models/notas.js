'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notas.belongsTo(models.Materias, {
        foreignKey: 'id_materias'
      })
      Notas.belongsTo(models.Professores, {
        foreignKey: 'id_professores'
      })
      Notas.belongsTo(models.Alunos, {
        foreignKey: 'id_alunos'
      })
    }
  };
  Notas.init({
    np1: DataTypes.FLOAT,
    np2: DataTypes.FLOAT,
    trabalhos: DataTypes.FLOAT,
    exame: DataTypes.FLOAT,
    sub: DataTypes.FLOAT,
    projIntegrador: DataTypes.FLOAT,
    media: DataTypes.FLOAT,
    observacoes: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Notas',
  });
  return Notas;
};