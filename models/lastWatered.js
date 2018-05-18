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
        }
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
<<<<<<< HEAD
        // console.log(models.User);
        

        lastWatered.belongsTo(models.User, {
            through : models.Plant
        });
=======
        console.log(models.Plant);



        lastWatered.hasOne(models.User, { through: models.Plant });
>>>>>>> 9654dcc0e797d84c24e091798b9b9b3c37960230
        lastWatered.belongsTo(models.Plant);
    };

    return lastWatered;
}; 