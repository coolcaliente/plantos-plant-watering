module.exports = function (sequelize, DataTypes) {
    var lastWatered = sequelize.define("lastWatered", {

        last_watered_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
        console.log(models.Plant);



        lastWatered.hasOne(models.User, { through: models.Plant });
        lastWatered.belongsTo(models.Plant);
    };

    return lastWatered;
}; 