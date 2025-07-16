# Architecture & Containerization Guide for Portfolio Website

This document describes the architecture of the Next.js portfolio application and how Docker and Kubernetes are orchestrated to build, run, and scale it.

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Docker Multi-Stage Build](#docker-multi-stage-build)
3. [Kubernetes Manifests](#kubernetes-manifests)
4. [Local Debugging with Docker](#local-debugging-with-docker)
5. [Deploying to Kubernetes](#deploying-to-kubernetes)
6. [Environment Variables](#environment-variables)
7. [Troubleshooting](#troubleshooting)
8. [Support](#support)

## Architecture Overview
The portfolio application is a Next.js 14 project (App Router, TypeScript, React 18) styled with TailwindCSS and animated via Framer Motion and Radix UI. At build time, Next.js outputs:
- A standalone server bundle (`.next/standalone`)
- Static assets (`.next/static`, `public`)

At runtime, a minimal Node.js container serves the application on port 3000.

In Kubernetes, traffic flows as:
```
Client → Ingress → Service → Deployment → Pod (Node.js + Next.js)
```

## Docker Multi-Stage Build
To optimize image size and security, the Dockerfile uses two stages:

### 1. Builder Stage
```dockerfile
FROM node:24-slim AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
```
- Installs dependencies and builds the Next.js application into a standalone server bundle.

### 2. Runner Stage
```dockerfile
FROM node:24-slim AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
ENV RESEND_API_KEY=
EXPOSE 3000
CMD ["node", "server.js"]
```
- Copies only the production bundle and static assets into a fresh image.
- Defines a default environment variable for the Resend API key.
- Exposes port 3000 and launches the standalone Next.js server.

## Kubernetes Manifests
All Kubernetes manifests are stored in the `k8s/` directory:
- **deployment.yml**: Defines a Deployment with 3 replicas, CPU/memory requests and limits, and health probes (`livenessProbe`, `readinessProbe`).
- **service.yml**: Creates a ClusterIP Service exposing port 80, forwarding to container port 3000.
- **ingress.yml**: Configures an NGINX Ingress to route `portfolio.local` host traffic to the Service.

Apply all manifests:
```bash
kubectl apply -f k8s/
```

## Local Debugging with Docker
Build and run the container locally for development:
```pwsh
docker build -t portfolio:local .
docker run --rm -p 3000:3000 `
  -e RESEND_API_KEY=$env:RESEND_API_KEY `
  portfolio:local
```
Browse http://localhost:3000 to verify functionality.

## Deploying to Kubernetes
1. Build, tag, and push your image:
   ```bash
   docker build -t portfolio:prod .
   docker tag portfolio:prod yourrepo/portfolio:latest
   docker push yourrepo/portfolio:latest
   ```

2. Update `image:` in `k8s/deployment.yml`:
   ```yaml
   containers:
     - name: portfolio
       image: yourrepo/portfolio:latest
   ```
3. Apply or update manifests:
   ```bash
   kubectl apply -f k8s/
   ```

## Environment Variables
| Variable       | Description                          | Required |
|----------------|--------------------------------------|----------|
| RESEND_API_KEY | API key for Resend email service     | Yes      |

Override at runtime in Docker or via Kubernetes Secrets/ConfigMaps.

## Troubleshooting
**Container exits immediately**
- Inspect logs: `docker logs <container-id>`
- Verify `RESEND_API_KEY` is set correctly

**Port conflicts**
- Map to a different host port: `-p 8080:3000`

**Ingress routing fails**
- Ensure `portfolio.local` is added to your `/etc/hosts` or DNS
- Check Ingress details: `kubectl describe ingress portfolio-ingress`

## Support
If you encounter issues with containerization or Kubernetes deployment, please open an issue at the [GitHub repository](https://github.com/Coderx85/portfolio) or contact the maintainer at <abpriyanshu085@gmail.com>.