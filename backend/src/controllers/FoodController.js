//importing database
const pool = require("../../config/db");
const { getAllFoodItemsQuery } = require("../queries/FoodQueries");

//METHOD: GET
//ROUTE: /api/v1/food/getAll
const getAllFoodItems = (rq, rs) => {
  pool.query(getAllFoodItemsQuery, (err, results) => {
    if (err) throw err;
    rs.status(200).json(results.rows);
  });
};

//METHOD: GET
//ROUTE: /api/v1/food/get
const searchFoodItems = (rq, rs) => {};

module.exports = { getAllFoodItems, searchFoodItems };
