const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgres://benoerjb:CWR6iUkB0Uayj69VkQIeaRMygDprSrOJ@hansken.db.elephantsql.com/benoerjb";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
