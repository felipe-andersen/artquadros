FROM node:18-alpine
ARG foo: bar
WORKDIR /user/App
COPY package.json ./ 
RUN npm install
COPY . .
CMD ["npm","run","dev"]
EXPOSE 3000
