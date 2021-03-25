// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Martha#1sys_config",
//     database: "burgers_db",
//   });
// }

connection = mysql.createConnection({
  host: "u6354r3es4optspf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "k2nhrfbi8i7ksey3",
  password: "zi1s6qb7bd7f5pz1",
  database: "zh97fp0uqk6dpk7p",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
