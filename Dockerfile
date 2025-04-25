FROM nginx:1.28.0
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/redirects.conf /etc/nginx/redirects.conf
COPY ./build /usr/share/nginx/html
