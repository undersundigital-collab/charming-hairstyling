# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose Vite default port
EXPOSE 3000

# Start the app with host exposed
CMD ["npm", "run", "dev", "--", "--host"]
