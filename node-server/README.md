# Node.js Express Server with Task Management

This is a Node.js Express server that provides task management functionality, translated from a Python FastAPI implementation. The server includes Docker support and uses nodemon for development auto-restart.

## Features

- **Task Management API**: Complete CRUD operations for tasks
- **Docker Ready**: Containerized for easy deployment
- **Development Mode**: Auto-restart with nodemon
- **Health Check**: Built-in health monitoring endpoint
- **Error Handling**: Proper validation and error responses
- **Graceful Shutdown**: Clean process termination

## Project Structure

```
node-server/
├── src/
│   └── app.js           # Express server with task management
├── package.json         # Dependencies and scripts
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore patterns
└── README.md           # This file
```

## API Endpoints

- **`GET /`**: Returns "Hello World"
- **`GET /tasks`**: Retrieves all tasks
  - Response: `{"tasks": ["task1", "task2", ...]}`
- **`POST /tasks`**: Adds a new task
  - Request: `{"text": "Your task description"}`
  - Response: `{"message": "Task added successfully"}`
- **`GET /health`**: Health check endpoint
  - Response: `{"status": "OK", "port": 8001, "timestamp": "..."}`

## Pre-loaded Tasks

The server starts with these creative tasks:
- "Write a diary entry from the future"
- "Create a time machine from a cardboard box"
- "Plan a trip to the dinosaurs"
- "Draw a futuristic city"
- "List items to bring on a time-travel adventure"

## Getting Started

### Prerequisites

- Node.js (v14 or higher) and yarn/npm
- Docker (optional, for containerized deployment)

### Local Development

1. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

2. **Start development server:**
   ```bash
   yarn start
   # or
   npm start
   ```
   
   The server will start with nodemon and be available at `http://localhost:8001`

3. **Test the API:**
   ```bash
   # Get all tasks
   curl http://localhost:8001/tasks
   
   # Add a new task
   curl -X POST http://localhost:8001/tasks \
     -H "Content-Type: application/json" \
     -d '{"text": "Learn Node.js"}'
   
   # Health check
   curl http://localhost:8001/health
   ```

### Docker Deployment

1. **Build the Docker image:**
   ```bash
   docker build -t node-server .
   ```

2. **Run the container:**
   ```bash
   docker run -p 8001:8001 node-server
   ```

3. **Using Docker Compose (from project root):**
   ```bash
   docker compose up --build
   ```

## Development Notes

- The server binds to `0.0.0.0:8001` for Docker compatibility
- Uses `node` in production and `nodemon` in development
- Includes input validation for POST requests
- Implements graceful shutdown handling
- All endpoints return JSON responses

## Translation from Python

This Node.js implementation is a direct translation of the Python FastAPI server, maintaining:
- Identical API endpoints and responses
- Same pre-loaded task data
- Equivalent validation logic
- Similar error handling patterns