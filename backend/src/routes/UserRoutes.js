const { Router } = require("express");
const {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

const router = Router();

router.get("/:id", getUserInfo);
router.post("/", createUser);

module.exports = router;
