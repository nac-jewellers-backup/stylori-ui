FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
RUN npm install -g nodemon
RUN npm install express dotenv serve-favicon graphql-request
WORKDIR /usr/src/app
COPY . .
EXPOSE 80
CMD ["npm","run","serve"]