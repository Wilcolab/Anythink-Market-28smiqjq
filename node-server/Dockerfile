FROM node:14

WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY src/ ./src/

EXPOSE 8001

# Use node instead of nodemon for production
CMD [ "yarn", "start" ]