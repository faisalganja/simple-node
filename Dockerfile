# Use a specific Node.js LTS version with Alpine Linux for smaller image size
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies (add --production flag)
RUN npm install --production

# Copy application code
COPY . .

# Expose port and start app
EXPOSE 3000
CMD ["node", "server.js"]

