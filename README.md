# Anythink Market - Dual Server Architecture

This project contains both a Python FastAPI server and a Node.js Express server that provide identical task management functionality. Both servers offer the same API endpoints for managing a task list.

## Project Structure

The project has the following structure:

```
Anythink-Market-28smiqjq/
├── python-server/
│   ├── src/
│   │   ├── main.py          # FastAPI server implementation
│   │   └── __init__.py      # Python package marker
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile          # Python server Docker configuration
├── node-server/
│   ├── src/
│   │   └── app.js          # Express server implementation (translated from Python)
│   ├── package.json        # Node.js dependencies and scripts
│   ├── Dockerfile          # Node.js server Docker configuration
│   └── .dockerignore       # Docker ignore file
└── docker-compose.yml      # Multi-container orchestration
```

### Key Files:

- **`python-server/src/main.py`**: FastAPI server with task management endpoints
- **`node-server/src/app.js`**: Express server with identical functionality (translated from Python)
- **`docker-compose.yml`**: Orchestrates both servers to run simultaneously

## Getting Started

To run both servers using Docker Compose, follow these steps:

1. **Build and start both servers:**

   ```shell
   docker compose up --build
   ```

   This command will:
   - Build Docker images for both Python and Node.js servers
   - Start both containers simultaneously
   - Python server will be available on port `8000`
   - Node.js server will be available on port `8001`

2. **Run individual servers:**

   **Python server only:**
   ```shell
   cd python-server
   docker build -t python-server .
   docker run -p 8000:8000 python-server
   ```

   **Node.js server only:**
   ```shell
   cd node-server
   docker build -t node-server .
   docker run -p 8001:8001 node-server
   ```

## API Endpoints

Both servers provide identical API functionality:

### Python Server (Port 8000) & Node.js Server (Port 8001)

- **`GET /`**: Returns "Hello World"
- **`GET /tasks`**: Retrieves the complete task list
- **`POST /tasks`**: Adds a new task to the list
  - Request body: `{"text": "Your task description"}`
  - Response: `{"message": "Task added successfully"}`
- **`GET /health`** (Node.js only): Health check endpoint

### Pre-loaded Tasks

Both servers start with these default tasks:
- "Write a diary entry from the future"
- "Create a time machine from a cardboard box"
- "Plan a trip to the dinosaurs"
- "Draw a futuristic city"
- "List items to bring on a time-travel adventure"

## Testing the APIs

You can test both servers using curl:

**Python server (port 8000):**
```bash
# Get all tasks
curl http://localhost:8000/tasks

# Add a new task
curl -X POST http://localhost:8000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "New time travel mission"}'
```

**Node.js server (port 8001):**
```bash
# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "New time travel mission"}'

# Health check
curl http://localhost:8001/health
```

## Development

### Python Server
- Built with FastAPI and Pydantic for data validation
- Uses uvicorn as the ASGI server
- Auto-reloads on code changes in development mode

### Node.js Server
- Built with Express.js
- Uses nodemon for development auto-restart
- Includes graceful shutdown handling
- Translated from the Python FastAPI implementation
