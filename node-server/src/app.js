const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Basic middleware
app.use(express.json());

// Health check endpoint for testing
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        port: PORT,
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Node.js Express server is running!' });
});

// Start server and bind to all interfaces (0.0.0.0) for Docker compatibility
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
    console.log(`📋 Health check available at http://0.0.0.0:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('✅ Process terminated');
    });
});

module.exports = app;