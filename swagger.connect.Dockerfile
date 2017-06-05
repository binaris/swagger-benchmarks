FROM node

RUN npm install -g swagger
COPY connect/package.json /connect/package.json
WORKDIR /connect
RUN npm install
COPY connect /connect
EXPOSE 10010

