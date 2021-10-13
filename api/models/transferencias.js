'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transferencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transferencias.hasMany(models.Matricula, {
        foreignKey: 'id_transferencia'
      })
    }
  };
  Transferencias.init({
    dataTransferencia: DataTypes.DATEONLY,
    instituicaoOrigem: DataTypes.STRING,
    reaproveitamento: DataTypes.STRING,
    observacoes: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transferencias',
  });
  return Transferencias;
};