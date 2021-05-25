FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent && npm cache clean --force
WORKDIR /usr/src/app
COPY . .
EXPOSE 8000
CMD ["npm","run","serve"]