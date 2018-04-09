
FROM openresty/openresty:alpine

EXPOSE 80

COPY ./dist /usr/local/openresty/nginx/html/

COPY ./config/nginx.conf /usr/local/openresty/nginx/conf
