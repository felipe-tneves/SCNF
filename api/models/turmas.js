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
      Turmas.belongsTo(models.Cursos, {
        foreignKey: 'id_cursos'
      })
      Turmas.hasMany(models.Materias, {
        foreignKey: 'id_turmas'
      })
      Turmas.belongsTo(models.Alunos, {
        foreignKey: 'id_turmas'
      })
    }
  };
  Turmas.init({
    codigo: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    periodo: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};