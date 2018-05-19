USE hngplants_db;

INSERT INTO plants(plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, image, createdAt, updatedAt) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 1, false, 2, 0, 0),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0);
('Coffee Plant', 'Coffea arabica', 'Keep soil thoroughly moist in spring and summer, and barely moist in fall and winter. Always use tepid water.', 1, false, 1, 0, 0),
('Aloe Vera/ Burn Plant', 'Aloe barbadensis', 'Do not let soil dry out completely', 2, false, 2, 0, 0),
('Hibiscus', 'Hibiscus rosa sinensis' , 'Allow top inch of soil to dry out between waterings. Place in a pot with drainage holes.' , 1, true, 1, 0, 0),
('Daffodil', 'Narcissus', 'Keep soil lightly moist and check often', 1, false, 1, 0, 0),
('Blue Agave', 'Agave parryi', 'Water thoroughly in spring and summer allowing top half of soil to dry out inbetween waterings. Be sure to not over water in winter.', 1, false, 2, 0, 0),
('Dumb Cane', 'Dieffenbachia', 'Water thoroughly and allow soil to dry out between waterings. Drooping leaves indicate being too dry.', 1, false, 1, 0, 0),
('Elephants Ear', 'Alocasia x amazonica', 'keep soil moist from spring to fall, but water sparingly in winter.', false, 1, 0, 0),
('Babies Tears', 'Soleirolia soleirolii', 'keep soil moist at all times', 2, true, 2, 0, 0),
('California Pitcher Plant', 'Darlingtonia californica', 'keep soil moist year-round. Use distilled or rain water. Limp leaves indicate dry soil.', 2, 0, 0),
('Foxtail Fern', 'Asparagus densiflorus', 'Allow water to dry out between waterings. Too much water will make roots rot.', 1, false, 2, 0, 0),
('Nerve Plant', 'Fittonia Verschaffeltii', 'Always keep soil moist. Yellow leaves indicate too much water or poor drainage. Allow soil to slightly dry between waterings.', 1, true, 1, 0, 0),
('Gold Dust Plant', 'Aucuba Japonica', 'Keep soil evenly moist from spring through fall, but cut back once growth has slowed.', 1, false, 1, 0, 0),
('Angel Trumpet Plant', 'Brugmansia', 'Water thoroughly spring through fall. Cut back when growth has slowed.', 1, fasle, 2, 0, 0),
('Begonia', 'Begonia x hiemalis', 'Keep soil evenly moist, but not soggy. Allow top inch of soil to dry between waterings', 1, false, 1, 0, 0),
('Jade Plant', 'Crassula Ovata', 'Allow water to slightly dry out between waterings. Dropped leaves or brown spots on leaves indicate the plant needs more water.', 1, false, 1, 0, 0),
('Tulips', 'Tulipa spp', 'Keep soil lightly moist, check soil often', 1, false, 1, 0, 0),

SELECT * FROM plants;

INSERT INTO users (name, email, password, createdAt, updatedAt) 
VALUES ('William', 'william@william.com', 'password', 0, 0);

SELECT * FROM users;