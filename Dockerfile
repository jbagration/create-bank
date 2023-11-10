FROM node:18-alpine AS builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json", "./"]
RUN npm install -DskipTests
COPY . ./
ARG NODE_ENV
RUN npm run build:$NODE_ENV
RUN rm -rf node_modules

FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
#ENTRYPOINT ["sh"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]
