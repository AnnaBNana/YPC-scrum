var mysql = require('mysql');
var bcrypt = require("bcryptjs");
var crypto = require("crypto");
var connection = mysql.createConnection({
    port     : 8889, // 3306
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "YPCdb"
});

module.exports = connection;
