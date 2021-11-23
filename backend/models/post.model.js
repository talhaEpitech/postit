module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    label: {
      type: Sequelize.STRING
    },
    done: {
      type: Sequelize.BOOLEAN
    },
    dateOfPost: {
      type: Sequelize.DATE
    },
  },{
    timestamps: false,
  });
  return Post;
};
