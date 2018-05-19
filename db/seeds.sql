USE hngplants_db;

INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, pet_friendly, sun_placement, createdAt, updatedAt) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', false, 2, 0, 0),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', true, 2, 0, 0),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', true, 1, 0, 0),
('Bosten Fern', 'Nephrolepis exaltata', 'Boston ferns need a cool place with high humidity and indirect light. When you care for Boston fern plants indoors, it&#39s a good idea to provide additional humidity for them, especially in the winter.', true, 1, 0, 0);

SELECT * FROM plants;

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

SELECT * FROM users;

INSERT INTO lastwatereds (lwd1, lwd2, lwd3, lwd4, plant_water_int, last_watered_date, createdAt, updatedAt, userId, PlantId) 
VALUES ('2018-05-16', null, null, null, null, null, 0, 0, 1, 1),
(null, null, null, null, 2, null, 0, 0, 1, 2),
(null, null, null, null, 2, '2018-05-18', 0, 0, 1, 3),
(null, null, null, null, null, null, 0, 0, 1, 4);

SELECT * FROM lastwatereds;
