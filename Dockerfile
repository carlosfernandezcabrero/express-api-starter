FROM node:lts-alpine3.18 as builder

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY ./src .

EXPOSE 3000

CMD PORT=3000 node index.js
