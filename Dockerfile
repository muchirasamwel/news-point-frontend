FROM node:14-alpine
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm i
RUN npm run build
CMD ["npm", "run", "start"]