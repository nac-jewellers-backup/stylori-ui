FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install nodemon express dotenv serve-favicon graphql-request
WORKDIR /usr/src/app
COPY . .
EXPOSE 8080
CMD ["npm","run","serve"]