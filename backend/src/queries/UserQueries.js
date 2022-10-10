const getUserInfoQuery = "SELECT * FROM users WHERE user_id = $1";
const createUserQuery = "";
const deleteUserQuery = "";
const updateUserQuery = "";

const checkIfEmailExists = "SELECT u FROM users u WHERE s.email = $1";

module.exports = {
  getUserInfoQuery,
  createUserQuery,
  deleteUserQuery,
  updateUserQuery,
  checkIfEmailExists,
};
