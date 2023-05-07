FROM ruby:3.1.3

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
ENV APP /usr/src/app

RUN mkdir $APP
WORKDIR $APP

RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client
RUN gem install bundler --version "2.4.12"

COPY Gemfile* $APP/

RUN bundle install

COPY . $APP/

RUN rm -f tmp/pids/server.pid
