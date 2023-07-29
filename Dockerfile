#Latest node from alpine linux
FROM node:alpine AS development

#Declare env
ENV NODE_ENV development

#Setup work dir
WORKDIR /TGI-WEB

#Install dependencies
COPY ./package.json /react-app
RUN npm install

#Copy all the files in our project
COPY . .

#Start our application 
CMD npm start
