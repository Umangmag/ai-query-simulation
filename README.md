## AI Query Simulation Engine

This project simulates an AI-powered data query engine.

## Features
- Converts natural language to pseudo-SQL
- Provides query explanations
- Validates query feasibility

## Tech Stack
- **Backend:** Node.js (Express.js)
- **Database:** SQLite (In-Memory)
- **Hosting:** Render

## API Endpoints

 1. Query Data
- Endpoint: `/api/query`
- Method: POST
- Payload:
```json
{ "user_query": "Show sales data" }
**Response:**
json

{ "pseudo_sql": "SELECT * FROM sales WHERE year = 2024;" }

 2. Explain Query

- **Endpoint:** `/api/explain`
- **Method:** POST
- **Payload:**
```json
{ "user_query": "Who are the top customers?" }
**Response:**
json
{ "explanation": "This query retrieves data about top customers.", "pseudo_sql": "SELECT customer_name, SUM(amount) ..." }


 3. Validate Query

- **Endpoint:** `/api/validate`
- **Method:** POST
- **Payload:**
```json
{ "user_query": "Show sales data" }
**Response:**
json
{ "valid": true }
