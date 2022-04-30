const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); //used to access backend api in react frontend side..
const mysql = require("mysql");
var conn = require("./connection");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  conn.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req,res) => {
  const {name, email, }
})

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact_db (name,email,phone) VALUES ('Madhuri Farade','madhurifarade@gmail.com',779865467)";
  conn.query(sqlInsert, (err, result) => {
    console.log("error ", err);
    console.log("result ", result);
  });
  res.send("Hello express!!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000!!");
});
