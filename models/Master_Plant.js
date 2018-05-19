module.exports = function (sequelize, DataTypes) {
    var Master_Plant = sequelize.define("Master_Plant", {
        common_name: {
            type: DataTypes.STRING,
            allowNull: true,
            default: ""
            // validate: {
            //     len: [1]
            // }
        },
        scientific_name: {
            type: DataTypes.STRING,
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        water_text: {
            type: DataTypes.TEXT("long"),
            // allowNull: false,
            validate: {
                len: [1]
            }
        },
        water_int: {
            type: DataTypes.INTEGER,
            // allowNull: true
            default: null
        },
        pet_friendly: {
            type: DataTypes.BOOLEAN
        },
        sun_placement: {
            type: DataTypes.INTEGER
        }
    });
    Master_Plant.associate = function (models) {

        Master_Plant.belongsTo(models.User);
        Master_Plant.hasMany(models.Plant);
        Master_Plant.belongsToMany(models.Image,{
            foreignKey: "imageable_ID",
            through:{
               model: "ItemImage",
               unique: false,
               scope: {
                   imageable: "Master_Plant"
               }
            },
            constranints: false
                
        });
    };

    return Master_Plant;
}; 
