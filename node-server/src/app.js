const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Basic middleware
app.use(express.json());

// Initial tasks data (translated from Python)
let tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box", 
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Health check endpoint for testing
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// Root endpoint (translated from Python FastAPI)
app.get('/', (req, res) => {
    res.json("Hello World");
});

// Get all tasks (translated from Python FastAPI)
app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});

// Add a new task (translated from Python FastAPI)
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    
    // Basic validation (equivalent to Pydantic validation)
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ 
            error: "Invalid task. 'text' field is required and must be a string." 
        });
    }
    
    tasks.push(text);
    res.json({ message: "Task added successfully" });
});

// Start server and bind to all interfaces (0.0.0.0) for Docker compatibility
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
    console.log(`📋 Available endpoints:`);
    console.log(`   GET  http://0.0.0.0:${PORT}/`);
    console.log(`   GET  http://0.0.0.0:${PORT}/tasks`);
    console.log(`   POST http://0.0.0.0:${PORT}/tasks`);
    console.log(`   GET  http://0.0.0.0:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('✅ Process terminated');
    });
});

module.exports = app;