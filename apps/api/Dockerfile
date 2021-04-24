FROM node:12

WORKDIR /app

# install and cache app dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# add app
COPY ./dist/ ./

# start app
CMD node /app/apps/api/main.js
