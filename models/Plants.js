module.exports = function (sequelize, DataTypes) {
    var Plants = sequelize.define("Plants", {
        plant_common_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        plant_scentific_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        plant_water_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        plant_water_int: {
            type: DataTypes.INTEGER,
        },
        pet_friendly: {
            type: DataTypes.BOOLEAN,
        },
        sun_placement: {
            type: DataTypes.INTEGER,
        }
    });

    Plants.associate = function (models) {
        console.log(models.userPlants);
        console.log(models.User);
        
        Plants.hasMany(models.userPlants, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Plants;
};
