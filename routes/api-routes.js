var db = require("../models");

module.exports = function (app) {

// GET route for all plants
    app.get("/api/plants/", function (req, res) {
        db.Plant.findAll({})
        .then(function(dbPlant) {
            res.json(dbPlant);
    });
});

// GET route by category
app.get("api/plants/category/:category", function (req, res) {
    db.Plant.findAll({
        where: {
            category: req.params.category
        }
    })
    .then(function(dbPlant){
        res.json(dbPlant);
    });
});

// GET route for specific plant
app.get("/api/plants/:id", function(req, res) {
    db.Plant.findOne({
        where: {
            id: req.param.id
        }
    })
    .then(function(dbPlant) {
        res.json(dbPlant);
    });
});

// POST route
app.post("/api/plants", function(req, res) {
    console.log(req.body);
    db.Plant.create({
        title:req.body.title,
        body: req.body.body,
        category: req.body.category
    })
    .then(function(dbPlant){
        res.json(dbPlant);
    });
});

// DELETE route
app.delete("api/plants/:id", function(req, res){
    db.Plant.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function(dbPlant) {
        res.json(dbPlant);
    });
});

// PUT route
app.put("/api/plants",function(req, res) {
    db.Plant.update(req.body,
    {
        where: {
            id: req.body.id
        }
    })
    .then(function(dbPlant) {
        res.json(dbPlant);
        });
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                