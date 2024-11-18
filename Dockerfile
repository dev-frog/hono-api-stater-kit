# Use Node.js LTS version
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install


# Copy the rest of the application
COPY . .


# Build the TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 9999

# Command to start the application
CMD ["npm", "start"]