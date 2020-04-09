// establish connection
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

// TODO get the queue
module.exports = {
    getUnservedGuest: function getQueue() {

        var queue = con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT id, skills FROM customers WHERE isServed = '0'", function (err, result) {
                if (err) throw err;
                queue = result;
                // console.log("##########");
                // console.log(queue);
                // console.log(JSON.stringify(result));
                // getQueue();
            });
        });

        // console.log(queue);
        // console.log(queue[0].id);
        return queue;
    }
}
