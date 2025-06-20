const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: 'Developer' }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Project, {
      through: 'ProjectAssignments',
      as: 'projects',
      foreignKey: 'userId'
    });
  };

  return User;
};
