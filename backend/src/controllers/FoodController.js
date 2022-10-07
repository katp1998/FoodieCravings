//importing database
const pool = require("../../config/db");

//METHOD: GET
//ROUTE: /api/v1/food/getAll
const getAllFoodItems = (rq, rs) => {
  pool.query("SELECT * FROM fooditem", (err, results) => {
    if (err) throw err;
    rs.status(200).json(results.rows);
  });
};

//METHOD: GET
//ROUTE: /api/v1/food/get
const searchFoodItems = (rq, rs) => {};

module.exports = { getAllFoodItems, searchFoodItems };
