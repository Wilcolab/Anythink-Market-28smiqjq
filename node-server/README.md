# Node.js Express Server with Docker

This project is a simple Node.js server using Express, set up to run with Docker. The server listens on port 8001 and uses Nodemon for automatic restarts on code changes.

## Project Structure

```
node-server
├── src
│   └── app.js
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd node-server
   ```

2. Install dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with Nodemon, run:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Running with Docker

To build the Docker image, run:

```
docker build -t node-server .
```

To run the Docker container, use:

```
docker run -p 8001:8001 node-server
```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.