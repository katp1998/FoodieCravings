//import the database
const pool = require("../../config/db");
const userQueries = require("../queries/UserQueries");

//METHOD: GET
//ROUTE: /api/v1/user/:id
const getUserInfo = (rq, rs) => {
  const id = parseInt(rq.params.id);
  pool.query(userQueries.getUserInfoQuery, [id], (err, results) => {
    if (err) {
      throw err;
    } else {
      rs.status(200).json(results);
    }
  });
};

//METHOD: POST
//ROUTE: /api/v1/user/create
const createUser = (rq, rs) => {
  const { name, email, password } = rq.body;

  //Validation: Checking if the user already exists
  pool.query(userQueries.checkIfEmailExists, [email], (err, results) => {
    if (count(email) > 0) {
      rs.send("Email already exists!");
    }
  });

  pool.query(userQueries.createUserQuery, (err, results) => {
    if (err) {
      throw err;
    } else {
      rs.status(200).json(results);
    }
  });
};

//METHOD: DELETE
//ROUTE: /api/v1/user/:id
const deleteUser = () => {};

//METHOD: PATCH/PUT
//ROUTE: /api/v1/user/:id
const updateUser = () => {};

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser,
};
