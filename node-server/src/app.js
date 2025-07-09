const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 8000;

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'anythink_market',
  password: 'postgres',
  port: 5432,
});

// Middleware
app.use(express.json());
app.use(cors());

// Ensure tasks table exists
const ensureTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      text TEXT NOT NULL
    );
  `);
};

// Wait for PostgreSQL to be ready before starting the server
const waitForPostgres = async (retries = 10, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await pool.query('SELECT 1');
      return true;
    } catch (err) {
      console.log(`Postgres not ready yet (attempt ${i + 1}/${retries}), retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error('Postgres did not become ready in time');
};

(async () => {
  try {
    await waitForPostgres();
    await ensureTable();

    // GET / - Hello World endpoint
    app.get('/', (req, res) => {
      res.json("Hello World");
    });

    // GET /tasks - Get all tasks
    app.get('/tasks', async (req, res) => {
      try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json({
          tasks: result.rows.map(row => row.text),
          count: result.rowCount
        });
      } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
      }
    });

    // POST /tasks - Add a new task
    app.post('/tasks', async (req, res) => {
      const { text } = req.body;
      if (!text || typeof text !== 'string' || text.trim() === '') {
        return res.status(400).json({ error: "Task text is required and must be a non-empty string" });
      }
      try {
        const trimmedText = text.trim();
        await pool.query('INSERT INTO tasks (text) VALUES ($1)', [trimmedText]);
        const result = await pool.query('SELECT COUNT(*) FROM tasks');
        res.json({
          message: "Task added successfully",
          task: trimmedText,
          totalTasks: parseInt(result.rows[0].count, 10)
        });
      } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
      }
    });

    // Health check endpoint
    app.get('/health', async (req, res) => {
      try {
        const result = await pool.query('SELECT COUNT(*) FROM tasks');
        res.json({
          status: 'OK',
          port: PORT,
          message: 'Node.js server is running',
          tasksCount: parseInt(result.rows[0].count, 10)
        });
      } catch (err) {
        res.status(500).json({ error: 'Database error', details: err.message });
      }
    });

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Node.js server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
