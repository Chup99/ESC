/**
 * create a new entry in sql (new user in our database)
 * NOTE got nothing to do with the rainbow guset account
 * May dont need to use database --> the queue is possible to do in node cache (array lists with in node)
 *  */ 

// establish connection
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});


module.exports = {
    createGuestUserInSQL: function (name, address, skills) {
        con.query(
            // insert isServed default as FALSE
            "INSERT INTO customers (name, address ,skills, isServed) VALUES (?, ?, ?, FALSE)",
            [name, address, skills],
            function (err, result, fields) {
                if (err) throw err;
                idInSQL = result.insertId;
                console.log("1 record inserted, ID: " + result.insertId);
            }
        )
    }
}