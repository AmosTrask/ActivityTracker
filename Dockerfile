FROM node:latest
WORKDIR /ExpressTemplate
COPY package.json /ExpressTemplate
RUN npm install
COPY . /ExpressTemplate
EXPOSE 3000