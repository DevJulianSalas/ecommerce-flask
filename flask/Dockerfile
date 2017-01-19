from alpine:latest
MAINTAINER juliansalas080@gmail.com

#Arguments to docker build



#Environment variables
ENV PYTHONUNBUFFERED=1
ENV USER=desarrollo
ENV HOME_DIR=home/desarrollo
ENV SHELL=/bin/bash


#Instalacion de los paquetes necesarios
RUN apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/main --no-cache py3-psycopg2
RUN apk add --update \
    python3 \
    python-dev \
    py-pip \
    build-base \
    libpq \
    && rm -rf /var/cache/apk/*

RUN pip install --upgrade pip

RUN mkdir /tmp/requirements
COPY requirements/base.txt /tmp/requirements/
COPY requirements/$DJANGO_ENV.txt /tmp/requirements/
RUN pip install -r /tmp/requirements/$DJANGO_ENV.txt



#Add user to not-root user and create folder to user
RUN addgroup -g 1000 $USER
RUN adduser -h /$HOMEDIR -D -s $SHELL $USER -G $USER
RUN mkdir -p /$HOME_DIR
RUN chown -R $USER:$USER /$HOME_DIR




#Use User not root
USER $USER
WORKDIR  /$HOME_DIR
