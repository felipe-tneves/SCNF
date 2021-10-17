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
      Transferencias.belongsTo(models.Adms, {
        foreignKey: 'id_adms'
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