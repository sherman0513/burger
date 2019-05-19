let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

// Make connection.
connection.connect(function(error) {
    if (error) {
      console.error("error connecting: " + error.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;