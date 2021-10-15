'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.hasMany(models.ADMs, {
        foreignKey: 'id_professor'
      })
      Professores.belongsTo(models.Calendarios, {
        foreignKey: 'id_calendario'
      })
      Professores.belongsTo(models.Infos, {
        foreignKey: 'id_infos'
      })
      Professores.hasMany(models.Turmas, {
        foreignKey: 'id_turma'
      })
    }
  };
  Professores.init({
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};