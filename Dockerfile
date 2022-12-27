FROM node:latest as node
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/package.json
RUN npm install

FROM nginx:alpine
COPY --from=node /app/dist/FrontEnd /usr/share/nginx/html
EXPOSE 4200:80


#FROM node:latest as node
#RUN mkdir -p /app
#WORKDIR /app
#COPY FrontEnd/package.json ./
#RUN npm install
#COPY FrontEnd/ .
#RUN npm run build
#EXPOSE $PORT
#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=$PORT
#ENV PROXY_API=$PROXY_API
#ENV PROXY_LOGIN=$PROXY_LOGIN
#CMD [ "npm", "start" ]
