const { Router } = require("express");
const {
  getAllFoodItems,
  searchFoodItems,
} = require("../controllers/FoodController");

const router = Router();

router.get("/getAll", getAllFoodItems);

module.exports = router;
