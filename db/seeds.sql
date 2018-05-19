USE hngplants_db;
INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', null, false, 2, 0, 0),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0);

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

INSERT INTO plantuser (userID, plantID, createdAt, updatedAt) VALUES (1, 1, 0, 0);

INSERT INTO lastWatereds (UserId, PlantId, createdAt, updatedAt) VALUES (1, 1, 0, 0);

-- INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt, MasterPlantId) 
-- VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 4, false, 2, 0, 0, null),
-- ('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 5, true, 2, 0, 0, null),
-- ('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 6, true, 1, 0, 0, null),
-- ('Bosten Fern', 'Nephrolepis exaltata', 'Boston ferns need a cool place with high humidity and indirect light. When you care for Boston fern plants indoors, it&#39s a good idea to provide additional humidity for them, especially in the winter.', 7, true, 1, 0, 0, null);

-- SELECT * FROM plants;

-- INSERT INTO users (name, email, password, createdAt, updatedAt) 
-- VALUES ('William', 'william@william.com', 'password', 0, 0);

-- SELECT * FROM users;

-- INSERT INTO lastwatereds (comments, createdAt, updatedAt, UserId, PlantId) 
-- VALUES (null, '2018-05-4', 0, 1, 1),
-- (null, '2018-05-8', 0, 1, 1),
-- (null, '2018-05-12', 0, 1, 1),
-- (null, '2018-05-16', 0, 1, 1),
-- (null, 0, 0, 1, 2),
-- (null, '2018-05-15', 0, 1, 3),
-- (null, '2018-05-16', 0, 1, 3);

-- SELECT * FROM lastwatereds;

-- -- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hngplants_db`.`plants`, CONSTRAINT `plants_ibfk_1` FOREIGN KEY (`MasterPlantId`) REFERENCES `master_plants` (`id`) ON DELETE SET NULL ON UPDATE CASCADE)

-- USE hngplants_db;

-- INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt, masterPlantId) 
-- VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 4, false, 2, 0, 0, 1),
-- ('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 5, true, 2, 0, 0, 2),
-- ('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 6, true, 1, 0, 0, 3),
-- ('Bosten Fern', 'Nephrolepis exaltata', 'Boston ferns need a cool place with high humidity and indirect light. When you care for Boston fern plants indoors, it&#39s a good idea to provide additional humidity for them, especially in the winter.', 7, true, 1, 0, 0, 4);

-- SELECT * FROM plants;

-- INSERT INTO users (name, email, password, createdAt, updatedAt) 
-- VALUES ('William', 'william@william.com', 'password', 0, 0);

-- SELECT * FROM users;

-- INSERT INTO lastwatereds (lwd1, lwd2, lwd3, lwd4, createdAt, updatedAt, UserId, PlantId) 
-- VALUES ('2018-05-16', null, null, null, 0, 0, 1, 1);

-- SELECT * FROM lastwatereds;