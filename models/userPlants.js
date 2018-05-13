module.exports = function (sequelize, DataTypes) {
    var userPlants = sequelize.define("UserPlants", {
        
        last_watered: {
            type: DataTypes.STRING
        }
        
    });
    
    userPlants.association = function (models) {
        userPlants.belongsTo(models.User);
        userPlants.belongsTo(models.Plants);
    };
    
    return userPlants;
};