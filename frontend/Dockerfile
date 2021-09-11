FROM node:14-alpine

ARG API_URL
ENV API_URL=$API_URL

WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g 
RUN npm install -g serve
COPY . ./

RUN npm run build