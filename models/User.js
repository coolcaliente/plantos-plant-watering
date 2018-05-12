module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
     User.associate = function(models) {
      // Associating User with Plants
      User.hasMany(models.userPlants, {
        foreignKey: {
          allowNull: false
        }
      });
    };
     return User;
  };
 