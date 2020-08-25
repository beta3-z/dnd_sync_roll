FROM node:alpine as BASE

ENV NODE_ENV="production"

RUN mkdir /app /app/src
WORKDIR /app

COPY package.json tsconfig.json ./

RUN yarn install --production && \
    chown -R node /app

FROM BASE
ARG PORT
ARG ADDRESS
ENV NODE_PATH="/app/build"
USER node

COPY src ./src

RUN yarn build

CMD yarn start