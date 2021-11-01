'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Adms.belongsTo(models.Campus, {
        foreignKey: 'id_campus'
      })
      Adms.belongsTo(models.Infos, {
        foreignKey: 'id_infos'
      })
      Adms.belongsTo(models.Calendarios, {
        foreignKey: 'id_calendarios'
      })
      Adms.hasMany(models.Trancamentos, {
        foreignKey: 'id_adms'
      })
      Adms.hasMany(models.Transferencias, {
        foreignKey: 'id_adms'
      })   
    }
  };
  Adms.init({
    ra: DataTypes.STRING,
    cargo: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Adms',
  });
  return Adms;
};