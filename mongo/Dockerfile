FROM alpine:edge

RUN echo "http://dl-4.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories && \
    apk update && apk add curl  && \
    mkdir /docker-entrypoint-initdb.d && \
    curl -o /usr/local/bin/gosu -sSL "https://github.com/tianon/gosu/releases/download/1.2/gosu-amd64" && \
    chmod +x /usr/local/bin/gosu && \
    apk del curl && \
    apk add nano && \
    apk add --no-cache mongodb && \
    apk add --no-cache mongodb-tools &&\
    rm -rf /var/cache/apk/*


ENV USER=developt
ENV HOMEDIR=/home/$USER
ENV BASH=bin/sh

RUN addgroup -g 1000 -S $USER
RUN adduser -h $HOMEDIR -D -s $BASH $USER -G $USER
RUN chown $USER:$USER  $HOMEDIR


COPY run.sh /
RUN chmod +x /run.sh
ENTRYPOINT ["/run.sh"]
CMD ["mongod"]
