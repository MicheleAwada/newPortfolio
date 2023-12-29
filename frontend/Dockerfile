# FROM node:alpine
FROM scratch

WORKDIR /frontend

COPY ./package.json .

RUN npm install

COPY ./dist .

# RUN npm run build