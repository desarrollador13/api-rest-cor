FROM node:12.11.1
COPY . ./api-rest-v1
WORKDIR /api-rest-v1
#
#WORKDIR /app
#COPY	package*.json ./
COPY	package*.json ./
#COPY	tsconfig.json ./
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
EXPOSE 3001
#COPY . .
CMD ["npm","run", "start"]