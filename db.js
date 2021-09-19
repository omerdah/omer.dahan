//import modules
const mysql = require("mysql2");
const myServer = require("./MyFirstServer");

// Create a connection to the database
const connection = mysql.createConnection({
    host: myServer.HOST,
    user: myServer.USER,
    password: myServer.PASSWORD,
    database: myServer.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;