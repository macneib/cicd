FROM nginx:stable-alpine
ADD dist/apps/my-app /usr/share/nginx/html
ADD apps/my-app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
