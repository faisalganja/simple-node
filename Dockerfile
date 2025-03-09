FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including AWS SDK
RUN npm install --production

# Copy config and application code
COPY config.js ./
COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]