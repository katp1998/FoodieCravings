const express = require("express");
const app = express();
const PORT = 3000 | process.env.PORT;

//importing routes
const userRoutes = require("./src/routes/UserRoutes");
const foodRoutes = require("./src/routes/FoodRoutes");

app.get("/", (rq, rs) => {
  rs.send("hello World!");
});

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
