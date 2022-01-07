FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install express dotenv serve-favicon graphql graphql-request nodemon axios
WORKDIR /usr/src/app
COPY . .
EXPOSE 8000
CMD ["npm","run","serve"]
