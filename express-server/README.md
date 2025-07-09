# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the source code.

## Project Structure

```
express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # NPM configuration file
├── Dockerfile          # Docker configuration file
├── .dockerignore       # Files to ignore when building the Docker image
├── nodemon.json        # Nodemon configuration file
└── README.md           # Project documentation
```

## Getting Started

To run the server locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Start the server:**
   ```
   yarn start
   ```

The server will be running on `http://localhost:8001`.

## Docker

To build and run the application using Docker, follow these steps:

1. **Build the Docker image:**
   ```
   docker build -t express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.