const sql = require('mysql');

//Create database connection
const dbConnect = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

//Connect to database
dbConnect.connect((err) => {
    if (err) throw err;
    console.log("Database connected");
});

module.exports = dbConnect;