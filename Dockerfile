FROM node:latest

WORKDIR /app

COPY . /app

USER node

CMD [ "/bin/bash", "-c", "yarn install && yarn start" ]