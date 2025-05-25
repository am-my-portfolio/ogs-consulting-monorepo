FROM nginx:1.28.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# CMD ["nginx", "-g", "/bin/sh", "daemon off;"]