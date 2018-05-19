USE hngplants_db;

INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt, masterPlantId) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 4, false, 2, 0, 0, 1),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 5, true, 2, 0, 0, 2),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 6, true, 1, 0, 0, 3),
('Bosten Fern', 'Nephrolepis exaltata', 'Boston ferns need a cool place with high humidity and indirect light. When you care for Boston fern plants indoors, it&#39s a good idea to provide additional humidity for them, especially in the winter.', 7, true, 1, 0, 0, 4);

SELECT * FROM plants;

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

SELECT * FROM users;

INSERT INTO lastwatereds (createdAt, updatedAt, userId, PlantId) 
VALUES ('2018-05-4', null, 1, 1),
('2018-05-8', null, 1, 1),
('2018-05-12', null, 1, 1),
('2018-05-16', null, 1, 1),
(null, null, 1, 2),
('2018-05-15', null, 1, 3),
('2018-05-16', null, 1, 3),

SELECT * FROM lastwatereds;
