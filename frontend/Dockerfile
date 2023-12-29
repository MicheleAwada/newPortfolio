# FROM node:alpine
FROM scratch

WORKDIR /frontend

COPY ./package.json .

RUN npm install

COPY . .

# RUN npm run build