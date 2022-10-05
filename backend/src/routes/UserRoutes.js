const { Router } = require("express");
const {
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

const router = Router();

router.get("/", createUser);

module.exports = router;
