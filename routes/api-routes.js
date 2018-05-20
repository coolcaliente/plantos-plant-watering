var db = require("../models");
//required for passport
var passport = require("../config/passport.js");

module.exports = function (app) {

    // GET route for all plants
    app.get("/api/plants/", function (req, res) {
        db.Plant.findAll({
            // include: [db.lastWatered]
        })
            .then(function (dbPlant) {
                res.json(dbPlant);
                console.log("app.get");
            });
    });
    // GET route by category
    // app.get("api/plants/category/:category", function (req, res) {
    //     db.Plant.findAll({
    //         where: {
    //             category: req.params.category
    //         }
    //     })
    //     .then(function(dbPlant){
    //         res.json(dbPlant);
    //     });
    // });

    // $(document).ready(function () {
    //     getPlants();
    //     function getPlants() {
    //         $.get("/api/Master_Plant", function (data) {
    //             for (var i = 0; i < data.length; i++) {
    //                 var newOption = $("<option>");
    //                 newOption.attr("id", data[i].plant_common_name);
    //             }
    //         })
    //     }
    // });

    //get route for current user
    app.get("/api/user/:id", function (req, res) {
        db.user.findOne({
            where: {
                id: req.params.id
            }

        })
            .then(function (dbUser) {
                res.json(dbUser);

            });
    });
    // GET route for specific plant
    app.get("/api/plants/:id", function (req, res) {
        console.log(req.params.id);
        db.Plant.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPlant) {
                res.json(dbPlant);
            });
    });

    // GET route for all lastWatered data
    app.get("/api/lastWatered/:Userid/:Plantid", function (req, res) {
        db.lastWatered.findAll({
            limit: 4,
            order: [['createdAt', 'DESC']],
            where: {
                UserId: req.params.Userid,
                PlantId: req.params.Plantid
            }
        })
            .then(function (wateredData) {
                res.json(wateredData);
                console.log("app.get");
            });
    });

    //why do we need this????
    // GET route for specific plant's last watered date
    app.get("/api/lastWatered/:id", function (req, res) {
        console.log(req.params.id);//working
        db.lastWatered.findOne({
            where: {
                id: req.params.id
            },
            // include: [db.lastWatered]
        })
            .then(function (dbLastWatered) {
                res.json(dbLastWatered);
            });
    });

    //----------------------------------------------------
    // POST route is working
    app.post("/api/plants", function (req, res) {

        if (req.body.plant_water_int === "") {
            req.body.plant_water_int = null;
        }

        db.Plant.create(
            req.body
        )
            .then(function (dbPlant) {
                res.json(dbPlant);
            });
    });

    //do we need this?
    // app.post("/api/plants/:id", function (req, res) {
    //     db.Plant.post({
    //     });
    // });

    // POST lastWatered
    app.post("/api/lastWatered/Post", function (req, res) {
        db.lastWatered.post({
        })
            .then(function (dbLastWatered) {
                res.json(dbLastWatered);
            });
    });

    // POST lastWatered
    // app.post("/api/lastWatered/Post", function (req, res) {
    //     db.lastWatered.post({
    //     })
    //     .then(function (dbLastWatered) {
    //         res.json(dbLastWatered);
    //     });
    // });


    //----------------------------------------------------
    // PUT - this updates lwd1, 2, 3, 4 on lastwatered table
    app.put("/api/lastWatered/Update", function (req, res) {
        db.lastWatered.update({
        })
            .then(function (dbLastWatered) {
                res.json(dbLastWatered);
            });
    });

    // PUT route - updates the last_watered_date, lwd1,2,3,4, plant_water_int???? all in one or separate???
    app.put("/api/lastWatered/:id", function (req, res) {
        db.Plant.update(
            {
                last_watered_date: req.body.last_watered_date
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbPlant) {
                res.json(dbPlant);
            });
    });

    //--------------------------------------------------
    // DELETE route
    app.delete("api/plants/:id", function (req, res) {
        db.Plant.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPlant) {
                res.json(dbPlant);
            });
    });

    //-----------------------------------------------
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
        // So we're sending the user back the route to the members page because the redirect will happen on the front end
        // They won't get this or even be able to access this page if they aren't authed
        console.log("post api login  route working!!");
        res.json("/myPlants");
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            res.redirect(307, "/api/login");
        })
            // .catch(function(err) {
            //   console.log(err);
            //   res.json(err);
            //   // res.status(422).json(err.errors[0].message);
            // })
            ;
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });


};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            