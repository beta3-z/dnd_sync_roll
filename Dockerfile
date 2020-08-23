FROM node:alpine as BASE

ENV NODE_ENV="production"

RUN mkdir /app /app/src
WORKDIR /app

COPY package.json tsconfig.json ./
COPY src ./src

RUN yarn global add pm2 && \
    yarn install && \
    yarn build && \
    chown -R node /app

FROM BASE
ARG PORT
ENV NODE_PATH="/app/build"

USER node

CMD yarn start