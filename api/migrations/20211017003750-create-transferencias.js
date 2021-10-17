'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transferencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataTransferencia: {
        type: Sequelize.DATEONLY
      },
      instituicaoOrigem: {
        type: Sequelize.STRING
      },
      reaproveitamento: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Transferencias');
  }
};