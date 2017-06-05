FROM node

RUN npm install -g swagger
COPY restify/package.json /restify/package.json
WORKDIR /restify
RUN npm install
COPY restify /restify
EXPOSE 10010

