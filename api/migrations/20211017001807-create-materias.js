'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cargaHoraria: {
        type: Sequelize.FLOAT
      },
      frequencia: {
        type: Sequelize.FLOAT
      },
      numerosAulas: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.ENUM,
        values: ['ativo', 'cursando', 'concluido', 'DP']
      },
      diasMateria: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.STRING
      },
      id_professores: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Professores',
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
    await queryInterface.dropTable('Materias');
  }
};