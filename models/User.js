// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: {
        type: DataTypes.STRING },
      email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    });
     User.associate = function(models) {
      // Associating User with Plants
      User.belongsToMany(models.Plant, {
        foreignKey: {
          allowNull: true
        },
        through: "plantUser"
      });
      User.hasMany(models.lastWatered)
    };
     return User;

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);

  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};









  // User.associate = function(models) {
  //   // Associating User with Plants
  //   User.hasMany(models.userPlants, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // }