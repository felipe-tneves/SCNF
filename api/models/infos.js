'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Infos.hasOne(models.ADMs, {
        foreignKey: 'id_adms'
      })
      Infos.hasOne(models.Professores, {
        foreignKey: 'id_professor'
      })
      Infos.hasOne(models.Alunos, {
        foreignKey: 'id_aluno'
      })
    }
  };
  Infos.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING,
    sexo: DataTypes.STRING,
    email: DataTypes.STRING,
    emailInst: DataTypes.STRING,
    status: DataTypes.STRING,
    telefone: DataTypes.STRING,
    dataNascimento: DataTypes.DATEONLY,
    tituloEleitor: DataTypes.STRING,
    reservista: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Infos',
  });
  return Infos;
};