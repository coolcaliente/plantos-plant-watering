module.exports = function (sequelize, DataTypes) {
    var lastWatered = sequelize.define("lastWatered", {

        last_watered_date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
        console.log("here"+models.User);
        

        lastWatered.hasMany(models.User, {
            foreignKey: {
                allowNull: true
            },
        });
        lastWatered.hasMany(models.Plant, {
            foreignKey: {
                allowNull: true
            },
        });
    };

    return lastWatered;
};
