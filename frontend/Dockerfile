FROM node:lts-alpine
WORKDIR /usr/src/frontend

COPY . ./
RUN npm i
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
