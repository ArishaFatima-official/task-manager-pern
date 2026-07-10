const pool = require("./config/db");

async function testDB() {
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("Connected Successfully");
        console.log(result.rows);
    } catch (err) {
        console.log(err.message);
    }
}

testDB();