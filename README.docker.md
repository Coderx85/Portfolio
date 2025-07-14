# Docker Guide for Portfolio Website

This guide explains how to containerize and run the portfolio website using Docker, with detailed explanations of each step in the Dockerfile.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Git](https://git-scm.com/downloads) for cloning the repository

## Understanding the Dockerfile

The Dockerfile uses a multi-stage build process to create an optimized container image. Let's break down each section:

### Stage 1: Builder

```dockerfile
FROM node:24-slim AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json .

# Install Node.js dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build
```

**Explanation:**
1. **`FROM node:24-slim AS builder`**: Uses the Node.js 24 slim image as the base for our build stage, named "builder"
2. **`WORKDIR /app`**: Sets the working directory inside the container to `/app`
3. **`COPY package.json .`**: Copies only the package.json file first (to leverage Docker's layer caching for dependencies)
4. **`RUN npm install --legacy-peer-deps`**: Installs dependencies with the `--legacy-peer-deps` flag to handle dependency conflicts
5. **`COPY . .`**: Copies all remaining project files into the container
6. **`RUN npm run build`**: Runs the Next.js build process, creating optimized production files

### Stage 2: Runner

```dockerfile
FROM node:24-slim AS runner

# Set the working directory
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

# Environment variable for API key
ENV RESEND_API_KEY=

# Expose the port the app runs on
EXPOSE 3000 

# Start the Next.js application
CMD ["node", "server.js"]
```

**Explanation:**
1. **`FROM node:24-slim AS runner`**: Creates a fresh container using the Node.js 24 slim image
2. **`WORKDIR /app`**: Sets the working directory inside the container
3. **Copy statements**: 
   - **`COPY --from=builder /app/.next/standalone ./`**: Copies the standalone Next.js build
   - **`COPY --from=builder /app/.next/static ./.next/static`**: Copies static assets
   - **`COPY --from=builder /app/package.json ./`**: Copies package.json for reference
   - **`COPY --from=builder /app/public ./public`**: Copies public assets like images
4. **`ENV RESEND_API_KEY=`**: Defines an environment variable for the Resend API key (empty by default)
5. **`EXPOSE 3000`**: Informs Docker that the container listens on port 3000
6. **`CMD ["node", "server.js"]`**: Specifies the command to run when the container starts

## Benefits of Multi-Stage Builds

This multi-stage build approach provides several advantages:

1. **Smaller final image size**: The final image only contains what's needed to run the application
2. **Improved security**: Build tools and development dependencies aren't included in the final image
3. **Faster deployment**: Smaller images are faster to download and deploy

## Step-by-Step Guide

### 1. Clone the Repository

```bash
git clone https://github.com/Priyanshu085/portfolio.git
cd portfolio
```

### 2. Build the Docker Image

```bash
docker build -t portfolio .
```

This builds the Docker image following the instructions in the Dockerfile.

### 3. Run the Container

```bash
docker run -p 3000:3000 -e RESEND_API_KEY=your_resend_api_key portfolio
```

Parameters explained:
- **`-p 3000:3000`**: Maps port 3000 from the container to port 3000 on your host
- **`-e RESEND_API_KEY=your_resend_api_key`**: Sets the environment variable for the contact form
- **`portfolio`**: The name of the image to run

### 4. Access the Website

Once running, access the portfolio at:
[http://localhost:3000](http://localhost:3000)

## Environment Variables

The application requires the following environment variables:

| Variable | Description | Required |
|----------|-------------|----------|
| RESEND_API_KEY | API key for the Resend email service | Yes |

You can provide environment variables in several ways:

1. **Directly in the run command**:
   ```bash
   docker run -p 3000:3000 -e RESEND_API_KEY=your_key portfolio
   ```

2. **Using an env file**:
   ```bash
   # Create a .env file
   echo "RESEND_API_KEY=your_key" > .env
   
   # Run with the env file
   docker run -p 3000:3000 --env-file .env portfolio
   ```

## Optimizing the Docker Image

To further optimize the Docker image:

1. **Use .dockerignore** to exclude unnecessary files:
   ```
   node_modules
   .git
   .github
   .next
   README.md
   ```

2. **Minimize layers** by combining related RUN commands:
   ```dockerfile
   RUN npm install --legacy-peer-deps && npm run build
   ```

3. **Consider using Alpine** for an even smaller base image:
   ```dockerfile
   FROM node:24-alpine AS builder
   ```

## Troubleshooting

### Common Issues

1. **Container exits immediately**:
   - Check logs: `docker logs <container_id>`
   - Verify environment variables are correctly set

2. **Port conflicts**:
   - Map to a different host port: `docker run -p 8080:3000 portfolio`

3. **Build failures**:
   - Ensure Docker has enough resources allocated
   - Try building with `--no-cache`: `docker build --no-cache -t portfolio .`

### Debugging

For debugging inside the container:

```bash
# Start container with interactive shell
docker run -it portfolio /bin/bash

# Or connect to a running container
docker exec -it <container_id> /bin/bash
```

## Support

For issues related to Docker setup, please create an issue in the GitHub repository or contact the maintainer at [abpriyanshu085@gmail.com](mailto:abpriyanshu085@gmail.com).
