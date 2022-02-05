FROM node:12.11.1-alpine
WORKDIR /usr/src/app

ARG ENVIRONMENT=''

COPY package*.json ./

RUN npm install

COPY . .

COPY .env /usr/src/app/.env

EXPOSE 80

CMD ["node", "app.js"]