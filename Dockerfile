FROM node:alpine  as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.16.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]