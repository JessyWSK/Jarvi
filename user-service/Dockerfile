FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3002
CMD ["node", "index.js"]
