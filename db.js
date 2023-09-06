const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgresql://postgres:0VwOB8LCFrMGG7GkGVXk@containers-us-west-161.railway.app:7492/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
