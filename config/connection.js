let mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
};
// Make connection.
connection.connect(function (error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;