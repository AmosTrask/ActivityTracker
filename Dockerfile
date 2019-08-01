FROM node:8
WORKDIR /ExpressTemplate
COPY package.json /ExpressTemplate
RUN npm install
COPY . /ExpressTemplate
EXPOSE 3000
