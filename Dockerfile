FROM node:alpine  as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .

ENV PORT=8080
ENV MONGODBURL=mongodb+srv://admin:admin@adresses.vlklqpv.mongodb.net/?retryWrites=true&w=majority

RUN yarn
COPY . .
RUN yarn build

EXPOSE 8080 
USER node
CMD ["node", "./dist/server.js"]