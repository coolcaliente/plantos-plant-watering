module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
     User.associate = function(models) {
      // Associating User with Plants
      User.belongsToMany(models.Plant, {
        foreignKey: {
          allowNull: false
        },
        through: "plantUser"
      });
    };
     return User;
  };
 