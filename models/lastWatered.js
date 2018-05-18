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
=======

>>>>>>> 64e443527fa7542f81f6919bd966cb6c5ac38f51
        console.log(models.Plant);

        lastWatered.belongsTo(models.User, { through: models.Plant });

<<<<<<< HEAD
        // lastWatered.hasOne(models.User, { through: models.Plant });
=======

        lastWatered.belongsTo(models.User, { through: models.Plant });

>>>>>>> 64e443527fa7542f81f6919bd966cb6c5ac38f51
        lastWatered.belongsTo(models.Plant);

        // lastWatered.belongsToMany(models.Plant);
        // lastWatered.belongsToMany(models.User);
    };

    return lastWatered;
}; 