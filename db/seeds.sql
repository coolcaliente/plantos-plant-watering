USE hngplants_db;

INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', null, false, 2, 0, 0),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0);

SELECT * FROM plants;

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

SELECT * FROM users;

INSERT INTO lastwatereds (lwd1, lwd2, lwd3, lwd4, createdAt, updatedAt, userId, PlantId) 
VALUES ('2018-05-16', 0, 0, 0, 0, 0, 1, 1);

SELECT * FROM lastwatereds;
