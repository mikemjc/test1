const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgres://postgres:cB-BbAC56D66G23*g4Ec-24ag*2Aa1A2@postgres.railway.internal:5432/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
