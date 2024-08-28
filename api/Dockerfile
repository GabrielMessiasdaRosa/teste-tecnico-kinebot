FROM node:18.19.1

WORKDIR /app

COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

COPY . .

RUN yarn

CMD ["sh", "-c", "wait-for-it.sh mysql-db:3306 -- yarn dev"]
