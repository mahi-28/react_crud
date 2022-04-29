var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_react",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

module.exports = conn;
