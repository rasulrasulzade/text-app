FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s", "."]
