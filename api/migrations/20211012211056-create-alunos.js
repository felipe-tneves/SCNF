'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipoIngresso: {
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
      id_matricula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Matriculas', key: 'id'}
      },
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Materias', key: 'id'}
      },
      id_calendario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Calendarios', key: 'id'}
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
    await queryInterface.dropTable('Alunos');
  }
};