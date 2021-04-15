FROM node:14.16.1-slim as builder

ENV TIME_ZONE=Asia/Shanghai

COPY . /app

WORKDIR /app

RUN npm install

CMD node app.js