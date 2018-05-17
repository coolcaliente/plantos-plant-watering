module.exports = function (sequelize, DataTypes) {
    var lastWatered = sequelize.define("lastWatered", {

        last_watered_date: {
            type: DataTypes.DATEONLY
        },
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
        console.log(models.User);
        

        lastWatered.hasMany(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
        lastWatered.hasMany(models.Plants, {
            foreignKey: {
                allowNull: false
            },
        });
    };

    return Plant;
};
