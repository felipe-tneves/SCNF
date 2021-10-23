'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Adms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cargo: {
        type: Sequelize.STRING
      },
      ra: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      id_infos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Infos',
          key: 'id'
        }
      },
      id_calendarios: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Calendarios',
          key: 'id'
        }
      },
      id_campus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Campuses',
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
    await queryInterface.dropTable('Adms');
  }
};