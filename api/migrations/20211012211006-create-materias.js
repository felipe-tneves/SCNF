'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cargaHoraria: {
        type: Sequelize.STRING
      },
      frequencia: {
        type: Sequelize.FLOAT
      },
      numerosAulas: {
        type: Sequelize.INTEGER
      },
      dataMateria: {
        type: Sequelize.DATEONLY
      },
      statusMateria: {
        type: Sequelize.BOOLEAN
      },
      observacoes: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Materias');
  }
};