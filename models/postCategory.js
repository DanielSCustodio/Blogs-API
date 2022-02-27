module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {}, { // nome tabela intermediaria
    timestamps: false, tablename: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, // through = através de
      foreignKey: 'categoryId', // id da tabela que chama
      otherKey: 'postId', // id da tabela
      as: 'posts',
    });
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, // through = através de
      foreignKey: 'postId', // id da tabela que chama
      otherKey: 'categoryId', // id da tabela
      as: 'categories',
    });
  };
  return PostCategory;
};