'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Matriculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusMatricula: {
        type: Sequelize.BOOLEAN
      },
      dataInicioCurso: {
        type: Sequelize.DATEONLY
      },
      dataTerminoCurso: {
        type: Sequelize.DATEONLY
      },
      dataTrancamento: {
        type: Sequelize.DATEONLY
      },
      observacoes: {
        type: Sequelize.STRING
      },
      id_transferencia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Transferencias', key: 'id'}
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
    await queryInterface.dropTable('Matriculas');
  }
};