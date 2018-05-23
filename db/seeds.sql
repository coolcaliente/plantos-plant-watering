USE hngplants_db;

INSERT INTO Master_Plants (common_name, scientific_name, water_text, water_int, pet_friendly, sun_placement, createdAt, updatedAt) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 1, false, 2, 0, 0),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0),
('Coffee Plant', 'Coffea arabica', 'Keep soil thoroughly moist in spring and summer, and barely moist in fall and winter. Always use tepid water.', 1, false, 1, 0, 0),
('Aloe Vera/ Burn Plant', 'Aloe barbadensis', 'Do not let soil dry out completely', 2, false, 2, 0, 0),
('Hibiscus', 'Hibiscus rosa sinensis' , 'Allow top inch of soil to dry out between waterings. Place in a pot with drainage holes.' , 1, true, 1, 0, 0),
('Daffodil', 'Narcissus', 'Keep soil lightly moist and check often', 1, false, 1, 0, 0),
('Blue Agave', 'Agave parryi', 'Water thoroughly in spring and summer allowing top half of soil to dry out inbetween waterings. Be sure to not over water in winter.', 1, false, 2, 0, 0),
('Dumb Cane', 'Dieffenbachia', 'Water thoroughly and allow soil to dry out between waterings. Drooping leaves indicate being too dry.', 1, false, 1, 0, 0),
('Elephants Ear', 'Alocasia x amazonica', 'keep soil moist from spring to fall, but water sparingly in winter.', 7, false, 1, 0, 0),
('Babies Tears', 'Soleirolia soleirolii', 'keep soil moist at all times', 2, true, 2, 0, 0),
('California Pitcher Plant', 'Darlingtonia californica', 'keep soil moist year-round. Use distilled or rain water. Limp leaves indicate dry soil.', 5, true, 2, 0, 0),
('Foxtail Fern', 'Asparagus densiflorus', 'Allow water to dry out between waterings. Too much water will make roots rot.', 1, false, 2, 0, 0),
('Nerve Plant', 'Fittonia Verschaffeltii', 'Always keep soil moist. Yellow leaves indicate too much water or poor drainage. Allow soil to slightly dry between waterings.', 1, true, 1, 0, 0),
('Gold Dust Plant', 'Aucuba Japonica', 'Keep soil evenly moist from spring through fall, but cut back once growth has slowed.', 1, false, 1, 0, 0),
('Angel Trumpet Plant', 'Brugmansia', 'Water thoroughly spring through fall. Cut back when growth has slowed.', 1, false, 2, 0, 0),
('Begonia', 'Begonia x hiemalis', 'Keep soil evenly moist, but not soggy. Allow top inch of soil to dry between waterings', 1, false, 1, 0, 0),
('Jade Plant', 'Crassula Ovata', 'Allow water to slightly dry out between waterings. Dropped leaves or brown spots on leaves indicate the plant needs more water.', 1, false, 1, 0, 0),
('Tulips', 'Tulipa spp', 'Keep soil lightly moist, check soil often', 1, false, 1, 0, 0),
('Christmas Cactus', 'Schlumbergera Bridgesii', 'Keep soil moist, but avoid making it too soggy.', 1, true, 2, 0, 0);

INSERT INTO Plants (plant_common_name, plant_scientific_name, plant_water_text, plant_water_int, pet_friendly, sun_placement, createdAt, updatedAt, masterPlantId) 
VALUES ('Areca Palm/ Butterfly Palm', 'Chrysalidocarpus lutescense', 'Water daily! The soil should always be moist.', 1, false, 2, 0, 0, 1),
('Rubber Plant', 'Ficus robusta', 'Rubber plants love water when they are growing, but not too frequently. Water them really well once the soil has dried out quite a bit, then wait until it dries out again. No more than once a week.', 1, true, 2, 0, 0, 2),
('English Ivy', 'Hedera helix', 'The Englsih Ivy likes moist soil, you should roughly water twice a week.', 2, true, 1, 0, 0, 3),
('Coffee Plant', 'Coffea arabica', 'Keep soil thoroughly moist in spring and summer, and barely moist in fall and winter. Always use tepid water.', 1, false, 1, 0, 0, 4),
('Aloe Vera/ Burn Plant', 'Aloe barbadensis', 'Do not let soil dry out completely', 2, false, 2, 0, 0, 5),
('Hibiscus', 'Hibiscus rosa sinensis' , 'Allow top inch of soil to dry out between waterings. Place in a pot with drainage holes.' , 1, true, 1, 0, 0, 6),
('Daffodil', 'Narcissus', 'Keep soil lightly moist and check often', 1, false, 1, 0, 0, 7),
('Blue Agave', 'Agave parryi', 'Water thoroughly in spring and summer allowing top half of soil to dry out inbetween waterings. Be sure to not over water in winter.', 1, false, 2, 0, 0, 8),
('Dumb Cane', 'Dieffenbachia', 'Water thoroughly and allow soil to dry out between waterings. Drooping leaves indicate being too dry.', 1, false, 1, 0, 0, 9),
('Elephants Ear', 'Alocasia x amazonica', 'keep soil moist from spring to fall, but water sparingly in winter.', 7, false, 1, 0, 0, 10),
('Babies Tears', 'Soleirolia soleirolii', 'keep soil moist at all times', 2, true, 2, 0, 0, 11),
('California Pitcher Plant', 'Darlingtonia californica', 'keep soil moist year-round. Use distilled or rain water. Limp leaves indicate dry soil.', 5, true, 2, 0, 0, 12),
('Foxtail Fern', 'Asparagus densiflorus', 'Allow water to dry out between waterings. Too much water will make roots rot.', 1, false, 2, 0, 0, 13),
('Nerve Plant', 'Fittonia Verschaffeltii', 'Always keep soil moist. Yellow leaves indicate too much water or poor drainage. Allow soil to slightly dry between waterings.', 1, true, 1, 0, 0, 14),
('Gold Dust Plant', 'Aucuba Japonica', 'Keep soil evenly moist from spring through fall, but cut back once growth has slowed.', 1, false, 1, 0, 0, 15),
('Angel Trumpet Plant', 'Brugmansia', 'Water thoroughly spring through fall. Cut back when growth has slowed.', 1, false, 2, 0, 0, 16),
('Begonia', 'Begonia x hiemalis', 'Keep soil evenly moist, but not soggy. Allow top inch of soil to dry between waterings', 1, false, 1, 0, 0, 17),
('Jade Plant', 'Crassula Ovata', 'Allow water to slightly dry out between waterings. Dropped leaves or brown spots on leaves indicate the plant needs more water.', 1, false, 1, 0, 0, 18),
('Tulips', 'Tulipa spp', 'Keep soil lightly moist, check soil often', 1, false, 1, 0, 0, 19),
('Christmas Cactus', 'Schlumbergera Bridgesii', 'Keep soil moist, but avoid making it too soggy.', 1, true, 2, 0, 0, 20);

INSERT INTO Users (email, password, createdAt, updatedAt) 
VALUES ('william@william.com', 'password', 0, 0),
("kris@gmail.com", "$2a$10$58xhMXJ1piupF2K8RQdhyuMqmD6Dvd4HpKlI871VL3mhT7ejqKV92", 0, 0);

INSERT INTO plantUser (userID, plantID, createdAt, updatedAt) 
VALUES (1, 1, 0, 0),
(1, 2, 0, 0),
(1, 3, 0, 0),
(2, 1, 0, 0),
(2, 2, 0, 0),
(2, 3, 0, 0),
(2, 4, 0, 0);

INSERT INTO lastWatereds (createdAt, updatedAt, userId, PlantId) 
VALUES ('2018-05-4', 0, 1, 1),
('2018-05-8', 0, 1, 1),
('2018-05-12', 0, 1, 1),
('2018-05-16', 0, 1, 1),
("2018-05-10", 0, 1, 2),
('2018-05-15', 0, 1, 3),
('2018-05-16', 0, 1, 3),

('2018-05-4', 0, 2, 1),
('2018-05-8', 0, 2, 1),
('2018-05-12', 0, 2, 1),
('2018-05-16', 0, 2, 1),
("2018-05-10", 0, 2, 2),
('2018-05-15', 0, 2, 3),
('2018-05-16', 0, 2, 3),
(0, 0, 2, 4);

INSERT INTO images (image_url, title, caption, createdAt, updatedAt)
VALUES 
('https://www.houseplantsexpert.com/assets/images/areca_palm_1.jpg', 'Butterfly Palm', 'Butterfly Palm', 0, 0),
('https://nurserylive.com/buy-lucky-plants-plants-online-in-india/rubber-plant-plants-in-india', 'Rubber Plant', 'Rubber Plant', 0, 0),
('https://cdn3.bigcommerce.com/s-2drwt2az/products/14080/images/44199/ivybaltic1__06289.1493248677.500.659.jpg?c=2','English Ivy', 'Englsih Ivy', 0, 0),
('https://cdn.zmescience.com/wp-content/uploads/2017/09/coffee-beans-1650788_960_720.jpg', 'Coffee Plant', 'Coffee Plant', 0, 0),
('https://www.kennedy.edu.ar/wp-content/uploads/2017/11/propiedades-del-aloe-vera.jpg', 'Aloe Vera', 'Aloe Vera', 0, 0),
('https://www.pennington.com/-/media/Images/Pennington-NA/US/blog/fertilizer/Secrets-to-Growing-Vibrant-Hibiscus/Yellow-Hibiscus.jpg?h=536&la=en&w=800&hash=3AF4F883379417BAFBD72BFDD158811F6B2EB670', 'Hibiscus', 'Hibiscus', 0, 0),
('https://www.americanmeadows.com/media/catalog/product/cache/1/image/500x/2664a1c26d20ff89f08769f165108d16/d/a/daffodil-fortissimo1.jpg', 'Daffodil', 'Daffodil', 0, 0),
('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blue-agave-against-adobe-wall-toni-abdnour.jpg', 'Blue Agave', 'Blue Agave', 0, 0),
('https://www.ourhouseplants.com/imgs-gallery/DieffenbachiaL4.jpg', 'Dumb Cane', 'Dumb Cane', 0, 0),
('https://www.americanmeadows.com/media/wysiwyg/Flower-Bulbs/Elephant-Ears/Elephant_Ear_Container.jpg', 'Elephants Ear', 'Elephants Ear', 0, 0),
('https://www.po.flowerscanadagrowers.com/uploads/2011/10/5974_9.jpg', 'Babies Tears', 'Babies Tears', 0, 0),
('https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Darlingtonia_californica_ne1.JPG/1200px-Darlingtonia_californica_ne1.JPG', 'California Pitcher Plant', 'California Pitcher Plant', 0, 0),
('https://i.pinimg.com/originals/11/cf/54/11cf5435fbc0163e5b4b622a9fbbef5d.jpg', 'Foxtail Fern', 'Foxtail Fern', 0, 0),
('http://www.guide-to-houseplants.com/images/xnerve-plant-leaves.jpg.pagespeed.ic.vHPOUg2IeE.jpg', 'Nerve Plant', ' Nerve Plant', 0, 0),
('https://cdn.shopify.com/s/files/1/2045/8185/products/gold_dust_aucuba-bush3.jpg?v=1513567179', 'Gold Dust Plant', 'Gold Dust Plant', 0, 0),
('https://i.ytimg.com/vi/pDAKSwUN134/maxresdefault.jpg', 'Angel Trumpet Plant', 'Angel Trumpet Plant', 0, 0),
('https://parkseed.com/images/xxl/02840-pk-p1.jpg', 'Begonia', 'Begonia', 0, 0),
('https://www.ourhouseplants.com/imgs-gallery/jade-plant-crassula-ovata-5L.jpg','Jade Plant', 'Jade Plant', 0, 0),
('https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/tulips.jpg?itok=2OhoOECS', 'Tulips', 'Tulips', 0, 0),
('http://dogtails.dogwatch.com/wp-content/uploads/2016/07/ChristmasCactus-800x533.jpg', 'Christmas Cactus', 'Christmas Cactus', 0, 0);