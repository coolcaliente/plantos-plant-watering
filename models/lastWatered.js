module.exports = function (sequelize, DataTypes) {
    var lastWatered = sequelize.define("lastWatered", {
// lwd = last watered date
        lwd1: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },lwd2: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },lwd3: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },lwd4: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        plant_water_int: {
            type: DataTypes.INTEGER,
            // allowNull: true
            default: null
        },
        last_watered_date: {
            type: DataTypes.DATEONLY
        }
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
        console.log(models.Plant);

        lastWatered.belongsTo(models.User, { through: models.Plant });
        lastWatered.belongsTo(models.Plant);
    };

    return lastWatered;
}; 