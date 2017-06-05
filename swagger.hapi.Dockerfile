FROM node

RUN npm install -g swagger
COPY hapi/package.json /hapi/package.json
WORKDIR /hapi
RUN npm install
COPY hapi /hapi
EXPOSE 10010

