const db = require("./database");

// Convert natural language to pseudo-SQL
const convertToSQL = (query) => {
  if (query.toLowerCase().includes("sales data")) {
    return "SELECT * FROM sales WHERE year = 2024;";
  } else if (query.toLowerCase().includes("top customers")) {
    return "SELECT customer_name, SUM(amount) FROM transactions GROUP BY customer_name ORDER BY SUM(amount) DESC LIMIT 10;";
  }
  return "SELECT * FROM unknown_table;";
};

// Handle /query request
exports.queryData = (req, res) => {
  const { user_query } = req.body;
  if (!user_query) {
    return res.status(400).json({ error: "Query cannot be empty" });
  }

  const pseudo_sql = convertToSQL(user_query);
  db.run("INSERT INTO queries (user_query, pseudo_sql) VALUES (?, ?)", [user_query, pseudo_sql]);

  res.json({ user_query, pseudo_sql, response: "Mock data result" });
};

// Handle /explain request
exports.explainQuery = (req, res) => {
  const { user_query } = req.body;
  if (!user_query) {
    return res.status(400).json({ error: "Query cannot be empty" });
  }

  const pseudo_sql = convertToSQL(user_query);
  res.json({ explanation: `This query retrieves data based on: ${user_query}`, pseudo_sql });
};

// Handle /validate request
exports.validateQuery = (req, res) => {
  const { user_query } = req.body;
  const pseudo_sql = convertToSQL(user_query);
  const isValid = pseudo_sql.includes("SELECT");

  res.json({ user_query, pseudo_sql, valid: isValid });
};
