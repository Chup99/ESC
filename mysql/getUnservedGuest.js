// establish connection
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

var array;

// TODO get the queue (Not necessary when we use the cached queue)
function getQueue() {

    // let queue;
    // var queue;
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT id, skills FROM customers WHERE isServed = '0'", function (err, result) {
            if (err) throw err;
            // queue = result;

            // ANCHOR printing a JSON
            array = result;
            console.log("#############");
            console.log(result);
            // return queue;
        });

        // ANCHOR not printing
        // console.log("Outside: " + queue);

    });

    // ANCHOR not printing
    // console.log(queue);
    // return queue;
}


module.exports.getQueue = getQueue;

exports.getArray = function () {
    getQueue();
    return array;
}