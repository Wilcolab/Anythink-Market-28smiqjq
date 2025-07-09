const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Initial tasks data
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes

// GET / - Hello World endpoint
app.get('/', (req, res) => {
  res.json("Hello World");
});

// GET /tasks - Get all tasks
app.get('/tasks', (req, res) => {
  console.log('GET /tasks - Current tasks:', tasks);
  res.json({ 
    tasks: tasks,
    count: tasks.length
  });
});

// POST /tasks - Add a new task
app.post('/tasks', (req, res) => {
  console.log('POST /tasks - Request body:', req.body);
  
  const { text } = req.body;
  
  if (!text || typeof text !== 'string' || text.trim() === '') {
    console.log('POST /tasks - Error: Invalid task text');
    return res.status(400).json({ error: "Task text is required and must be a non-empty string" });
  }
  
  const trimmedText = text.trim();
  tasks.push(trimmedText);
  
  console.log('POST /tasks - Task added:', trimmedText);
  console.log('POST /tasks - Current tasks count:', tasks.length);
  
  res.json({ 
    message: "Task added successfully",
    task: trimmedText,
    totalTasks: tasks.length
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    port: PORT, 
    message: 'Node.js server is running',
    tasksCount: tasks.length
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node.js server running on port ${PORT}`);
});
