const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
let taskArray = [];

//Middlewares
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: "*/*",
  })
);

//Routes
//http://localhost:3000/save_data
app.get("/save_data", (req, res) => {
  res.send(JSON.stringify(taskArray));
});

//http://localhost:3000/save_data
app.post("/save_data", (req, res) => {
  taskArray.push(req.body);
  res.send(JSON.stringify("200"));
  console.log(taskArray);
});

//Run server
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
