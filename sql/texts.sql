SELECT * from crusine;
SELECT * from fooditem;
SELECT * from meal_type;
SELECT * from mood;
SELECT * from type_of_food;
SELECT * from user;

INSERT INTO crusine (crusinename) VALUES ('Sri Lankan Crusine'), ('Indian Crusine'), ('Thai Crusine'), ('Korean Crusine');

INSERT INTO fooditem (fooditem_name,crusine,meal_type,mood,type_of_food) VALUES 
('Rice & Curry'), ('Sri Lankan Crusine'),('Any'), ('Filling'), ('Main Meal');