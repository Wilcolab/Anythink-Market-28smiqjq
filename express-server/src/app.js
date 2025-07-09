const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(express.json());

// Health check endpoint (optional)
app.get('/health', (req, res) => {
  res.json({ status: 'OK', port: PORT, message: 'Express server is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server running on port ${PORT}`);
});