FROM node:12-alpine as builder
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./ /app
EXPOSE 3003
CMD EGG_SERVER_ENV=prod npm start

