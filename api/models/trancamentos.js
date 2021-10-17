'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trancamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trancamentos.belongsTo(models.Adms, {
        foreignKey: 'id_adms'
      })
    }
  };
  Trancamentos.init({
    motivo: DataTypes.STRING,
    dataTrancamento: DataTypes.DATEONLY,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Trancamentos',
  });
  return Trancamentos;
};