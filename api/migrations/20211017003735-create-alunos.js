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
      ra: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      tipoIngresso: {
        type: Sequelize.STRING
      },
      instituicaoOrigem: {
        type: Sequelize.STRING
      },
      rendaFamiliar: {
        type: Sequelize.DECIMAL
      },
      id_campus: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Campuses',
          key: 'id'
        }
      },
      id_matriculas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Matriculas',
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
      id_infos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Infos',
          key: 'id'
        }
      },
      id_materias: {
        allowNull: false,
        type: [Sequelize.INTEGER],
        references: {
          model: 'Materias',
          key: 'id'
        }
      },
      id_turmas: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Turmas',
          key: 'id'
        }
      },
      id_cursos: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cursos',
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
    await queryInterface.dropTable('Alunos');
  }
};