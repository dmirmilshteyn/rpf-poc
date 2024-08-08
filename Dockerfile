FROM node:20

WORKDIR /app/

COPY ["app/package.json", "app/yarn.lock", "./"]

RUN yarn install

COPY app .

CMD yarn run develop
