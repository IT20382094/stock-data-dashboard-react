const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "navoda",
  host: "localhost",
  port: 5433,
  database: "cryptodata"
});

module.exports = pool;