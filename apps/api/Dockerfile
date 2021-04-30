FROM node:12-alpine

WORKDIR /app

# add app
COPY ./dist/apps/api ./
COPY ./prisma ./prisma
COPY .env ./
RUN npm install --production

# start app
CMD node main.js
