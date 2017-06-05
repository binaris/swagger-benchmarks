FROM node

RUN npm install -g swagger
COPY express/package.json /express/package.json
WORKDIR /express
RUN npm install
COPY express /express
EXPOSE 10010

