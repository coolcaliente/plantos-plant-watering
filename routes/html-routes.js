var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/index.handlebars"))
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/about.handlebars"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/addPlant.handlebars"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/login.handlebars"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/myplants.handlebars"));
    });

    app.get("/", function(req, res) {
        res.sendFile(path.join(_dirname, "../views/pages/schedule.handlebars"));
    });
};