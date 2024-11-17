# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if using Yarn)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:stable-alpine

# Set working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx files
RUN rm -rf ./*

# Copy the React build files from the first stage
COPY --from=build /app/build .

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 7079
EXPOSE 7079

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]