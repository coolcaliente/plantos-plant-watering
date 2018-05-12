module.exports = function (sequelize, DataTypes) {
    var Plants = sequelize.define("Plant", {
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

    return Plants;
};
