FROM node:20-alpine3.18 as builder
WORKDIR /src/app
COPY package.json ./
RUN NODE_ENV=development npm i
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm","run","start"]