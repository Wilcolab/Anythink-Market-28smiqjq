# Anythink Market - Multi-Server Application

This project contains multiple server implementations in different technologies. Currently includes two Node.js Express servers and maintains the original Python FastAPI server for reference.

## Project Structure

The project has the following files and directories:

### Node.js Servers

- `express-server/`: Simple Express server with no endpoints (port 8001)
  - `src/app.js`: Main Express application with health check endpoint
  - `package.json`: Dependencies and scripts for the Express server
  - `Dockerfile`: Docker configuration for the Express server
  - `nodemon.json`: Nodemon configuration for hot reloading
  - `README.md`: Express server specific documentation

- `node-server/`: Node.js server with task management API (port 8000)
  - `src/app.js`: Full Express application with task management endpoints
  - `package.json`: Dependencies and scripts for the Node.js server
  - `Dockerfile`: Docker configuration for the Node.js server
  - `nodemon.json`: Nodemon configuration for hot reloading
  - `README.md`: Node.js server specific documentation

### Python Server (Legacy)

- `python-server/`: Original FastAPI server implementation
  - `src/main.py`: FastAPI server with task management routes
  - `src/__init__.py`: Python package marker
  - `requirements.txt`: Python dependencies
  - `Dockerfile`: Docker configuration for the Python server

### Configuration

- `docker-compose.yml`: Multi-container Docker configuration for running both Node.js servers
- `README.md`: This file - project overview and documentation

## Getting Started

To run both Node.js servers using Docker, follow these steps:

1. **Build and start the Docker containers:**

   ```shell
   docker compose up --build
   ```

   This command will build Docker images for both Node.js servers and start the containers.

2. **Access the servers:**
   - **Node.js Server (Task API)**: http://localhost:8000
   - **Express Server (Simple)**: http://localhost:8001/health

3. **For local development (without Docker):**

   ```shell
   # Node.js server
   cd node-server
   npm install
   npm start

   # Express server
   cd express-server
   npm install
   yarn start
   ```

## API Routes

### Node.js Server (Port 8000)

- `GET /`: Returns "Hello World" message
- `POST /tasks`: Adds a task to the task list
  ```json
  {
    "text": "Your task description"
  }
  ```
- `GET /tasks`: Retrieves all tasks in the task list

### Express Server (Port 8001)

- `GET /health`: Health check endpoint returning server status

## Recent Changes

- **Converted Python FastAPI server to Node.js Express** (now running on port 8000)
- **Added simple Express server** with no endpoints (port 8001)
- **Updated Docker Compose** to run both Node.js servers simultaneously
- **Implemented hot reloading** with nodemon for both servers
- **Fixed container networking** by binding servers to `0.0.0.0` instead of `localhost`
- **Added health check endpoints** for monitoring server status

## Development Features

- **Hot Reloading**: Both servers use nodemon for automatic restart on code changes
- **Docker Support**: Complete containerization with volume mounting for development
- **Health Monitoring**: Health check endpoints for server status verification
- **Modern Dependencies**: Updated to latest Express and nodemon versions
