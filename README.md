# AI Query Simulation Engine

This project simulates an AI-powered data query engine.

## Features
- Converts natural language to pseudo-SQL
- Provides query explanations
- Validates query feasibility

## Tech Stack
- **Backend:** Node.js (Express.js)
- **Database:** SQLite (In-Memory)
- **Hosting:** Render/Heroku

## API Endpoints

### 1. Query Data
- **Endpoint:** `/api/query`
- **Method:** POST
- **Payload:**
```json
{ "user_query": "Show sales data" }
```
- **Response:**
```json
{
  "user_query": "Show sales data",
  "pseudo_sql": "SELECT * FROM sales WHERE year = 2024;",
  "response": "Mock data result"
}
```

### 2. Explain Query
- **Endpoint:** `/api/explain`
- **Method:** POST
- **Payload:**
```json
{ "user_query": "Show top customers" }
```
- **Response:**
```json
{
  "explanation": "This query retrieves data based on: Show top customers",
  "pseudo_sql": "SELECT customer_name, SUM(amount) FROM transactions GROUP BY customer_name ORDER BY SUM(amount) DESC LIMIT 10;"
}
```

### 3. Validate Query
- **Endpoint:** `/api/validate`
- **Method:** POST
- **Payload:**
```json
{ "user_query": "Get sales report" }
```
- **Response:**
```json
{
  "user_query": "Get sales report",
  "pseudo_sql": "SELECT * FROM sales WHERE year = 2024;",
  "valid": true
}
```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd ai-query-simulation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Testing with Thunder Client or Postman
- Use the above endpoints with the given JSON payloads.
- Ensure the server is running before sending requests.


## Additional Notes
- The database is in-memory and resets on restart.
- Extend the `convertToSQL` function in `queryController.js` for more query types.

