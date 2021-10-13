'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      periodo: {
        type: Sequelize.STRING
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Alunos', key: 'id'}
      },
      id_professor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Professores', key: 'id'}
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
    await queryInterface.dropTable('Turmas');
  }
};