'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Campus_Cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      id_campus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Campus', key: 'id'}
      },
      id_curso: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cursos', key: 'id'}
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
    await queryInterface.dropTable('Campus_Cursos');
  }
};