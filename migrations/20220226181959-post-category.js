'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'BlogPosts', //nome da tabela
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreingKey: true,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
