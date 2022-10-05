//import the database
const pool = require("../../config/db")

//METHOD: POST
//ROUTE: /api/v1/user/create
const createUser = (rq,rs) => {
    pool.query("INSERT INTO users", (err, results) =>{
        if(err) {
            throw err;
        }else{
            rs.status(200).json(results)
        }
        
    })
};

//METHOD: DELETE
//ROUTE: /api/v1/user/delete
const deleteUser = () => {};

//METHOD: PATCH/PUT
//ROUTE: /api/v1/user/update
const updateUser = () => {};

module.exports   = {
  createUser,
  deleteUser,
  updateUser,
};
