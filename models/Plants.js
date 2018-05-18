module.exports = function (sequelize, DataTypes) {
    var Plant = sequelize.define("Plant", {
        plant_common_name: {
            type: DataTypes.STRING,
            allowNull: true,
            default: ""
            // validate: {
            //     len: [1]
            // }
        },
        plant_scientific_name: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        plant_water_text: {
            type: DataTypes.TEXT("long"),
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        //get error msg for below: Incorrect integer value
        plant_water_int: {
            type: DataTypes.INTEGER,
            // allowNull: true
            default: null
        },
        pet_friendly: {
            type: DataTypes.BOOLEAN
        },
        sun_placement: {
            type: DataTypes.INTEGER
        },
        last_watered_date: {
            type: DataTypes.DATEONLY
        },
        image:{
            type: DataTypes.BLOB('long')
        }
    });

    Plant.associate = function (models) {
        // console.log(models.userPlants);
        console.log(models.User);
        

        Plant.belongsToMany(models.User, {
            foreignKey:  {
                name: "userID",
                allowNull: true
            },
            through: "plantUser"
        });
        Plant.hasMany(models.lastWatered)
    };

    return Plant;
};
