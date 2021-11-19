module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    dateOfPost: {
      type: Sequelize.DATE
    },
  },{
    timestamps: false,
  });
  return Post;
};
