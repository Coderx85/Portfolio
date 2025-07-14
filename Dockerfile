FROM node:24-slim AS builder

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:24-slim AS runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

ENV RESEND_API_KEY=

EXPOSE 3000 

CMD ["node", "server.js"]