FROM node:12 as build-stage

WORKDIR /app/src

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build --fix

FROM nginx:alpine

COPY --from=build-stage /app/src/dist /etc/nginx/html
CMD ["nginx"]