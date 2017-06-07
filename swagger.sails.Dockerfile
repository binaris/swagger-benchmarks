FROM node

RUN npm install -g swagger
COPY sails/package.json /sails/package.json
WORKDIR /sails
RUN npm install
COPY sails /sails
EXPOSE 10010

