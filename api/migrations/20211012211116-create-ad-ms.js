'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ADMs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cargo: {
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
        references: { model: 'Infos', key: 'id'}
      },
      id_professor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Professores', key: 'id'}
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Alunos', key: 'id'}
      },
      id_matricula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Matriculas', key: 'id'}
      },
      id_campus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Campus', key: 'id'}
      },
      id_calendario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Calendarios', key: 'id'}
      },
      id_turma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Turmas', key: 'id'}
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
    await queryInterface.dropTable('ADMs');
  }
};