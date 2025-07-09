# Node.js Server

This is a Node.js Express server that provides the same functionality as the original Python FastAPI server.

## Endpoints

- `GET /` - Returns "Hello World"
- `GET /tasks` - Returns all tasks
- `POST /tasks` - Add a new task (requires JSON body with `text` field)
- `GET /health` - Health check endpoint

## Running the server

### With Docker Compose
```bash
docker compose up
```

### Locally
```bash
npm install
npm start
```

The server runs on port 8000 with hot reloading enabled via nodemon.

## API Examples

### Get all tasks
```bash
curl http://localhost:8000/tasks
```

### Add a new task
```bash
curl -X POST http://localhost:8000/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "My new task"}'
```
