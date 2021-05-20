ARG RUBY_VERSION
FROM ruby:${RUBY_VERSION}-buster

ARG BUNDLER_VERSION

# アプリケーションの依存関係
RUN apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get -yq dist-upgrade && \
    DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    libpq-dev &&\
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    truncate -s 0 /var/log/*log

# bundlerの設定
ENV LANG=C.UTF-8 \
    BUNDLE_JOBS=4 \
    BUNDLE_RETRY=3s

WORKDIR /solargraph

EXPOSE 7658