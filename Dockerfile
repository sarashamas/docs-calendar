FROM nginx:1.27
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/redirects.conf /etc/nginx/redirects.conf
COPY ./build /usr/share/nginx/html
