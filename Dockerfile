# Dockerfile
FROM node:18
WORKDIR /app
COPY server/package*.json ./server/
RUN npm install --prefix ./server
COPY . .
WORKDIR /app/server
EXPOSE 5000
CMD ["node", "app.js"]
