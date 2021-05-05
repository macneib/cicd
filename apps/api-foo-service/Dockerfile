FROM node:12-alpine

WORKDIR /app

# add app
COPY ./dist/apps/api-foo-service ./
RUN npm install --production

# start app
CMD node main.js
