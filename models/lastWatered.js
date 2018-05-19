module.exports = function (sequelize, DataTypes) {
    var lastWatered = sequelize.define("lastWatered", {
        comments: {
            type: DataTypes.TEXT('long')
        }
       
    });

    lastWatered.associate = function (models) {
        // console.log(models.userPlants);
        console.log(models.Plant);

        lastWatered.belongsTo(models.User);
        lastWatered.belongsTo(models.Plant);
    };

    return lastWatered;
}; 