FROM node:12.0.0-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

WORKDIR /usr/src/app
COPY . .
EXPOSE 80
CMD ["npm","serve"]