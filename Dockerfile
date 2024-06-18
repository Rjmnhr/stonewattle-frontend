# Stage 1: Build the React application
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve the React application
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build ./build
RUN npm install -g serve

# The port the app runs on
ENV PORT 3002

# Expose port
EXPOSE 3002

# Command to run the application
CMD ["serve", "-s", "build"]