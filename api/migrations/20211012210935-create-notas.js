'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      np1: {
        type: Sequelize.FLOAT
      },
      np2: {
        type: Sequelize.FLOAT
      },
      trabalhos: {
        type: Sequelize.FLOAT
      },
      exame: {
        type: Sequelize.FLOAT
      },
      sub: {
        type: Sequelize.FLOAT
      },
      projInter: {
        type: Sequelize.FLOAT
      },
      media: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Notas');
  }
};