const express = require("express");
const app = express();

const mysql = require("mysql");

const db = mysql.createConnection({
  user: "asl",
  host: "wdv442-mysql",
  password: "asl",
  database: "wdv442_space_tracker",
});

db.query("SELECT * ");

app.listen(8080, () => {
  console.log("server running");
});
