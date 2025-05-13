FROM node:18.20-alpine
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .
COPY server/.env .env
EXPOSE 5000
CMD ["node", "app.js"]
