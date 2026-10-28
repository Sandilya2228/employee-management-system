const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Sample",
    password: "12345",
    port: 5432
});

pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.log("Database Connection Failed");5
        console.log(err);
    } else {
        console.log("Database Connected Successfully");
        console.log(result.rows);
    }

});

module.exports = pool;
