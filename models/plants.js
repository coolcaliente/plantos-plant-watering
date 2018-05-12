module.exports = function(sequelize, DataTypes) {
    var Plants = sequelize.define("Plant", {
      plant_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      plant_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "??"
      }
    });
    return Plants;
  };
  