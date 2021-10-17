'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trancamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      motivo: {
        type: Sequelize.STRING
      },
      dataTrancamento: {
        type: Sequelize.DATEONLY
      },
      id_alunos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Alunos',
          key: 'id'
        }
      },
      id_adms: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Adms',
          key: 'id'
        }
      },
      deletedAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Trancamentos');
  }
};