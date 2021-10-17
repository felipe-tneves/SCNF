'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Campus.hasMany(models.Cursos, {
        foreignKey: 'id_campus'
      })
      Campus.hasMany(models.Matriculas, {
        foreignKey: 'id_campus'
      })
      Campus.hasMany(models.Alunos, {
        foreignKey: 'id_campus'
      })
      Campus.hasOne(models.Adms, {
        foreignKey: 'id_campus'
      })
    }
  };
  Campus.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING,
    telefone: DataTypes.STRING,
    quantAlunos: DataTypes.INTEGER,
    sede: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Campus',
  });
  return Campus;
};