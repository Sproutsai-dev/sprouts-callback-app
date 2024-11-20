# Stage 1: Build the application
FROM node:20-alpine AS build

# Install PNPM
RUN npm install -g pnpm

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml files to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using PNPM
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Serve the built app using a lightweight server
FROM nginx:alpine AS production

# Remove the default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port NGINX will serve the app on
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]