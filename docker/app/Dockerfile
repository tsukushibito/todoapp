ARG RUBY_VERSION
FROM ruby:${RUBY_VERSION}-buster

ARG PG_MAJOR
ARG NODE_MAJOR
ARG BUNDLER_VERSION
ARG YARN_VERSION

# PostgreSQLをソースリストに追加
RUN curl -sSL https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
    && echo 'deb http://apt.postgresql.org/pub/repos/apt/ buster-pgdg main' ${PG_MAJOR} > /etc/apt/sources.list.d/pgdg.list

# NodeJSをソースリストに追加
RUN curl -sL https://deb.nodesource.com/setup_${NODE_MAJOR}.x | bash -

# Yarnをソースリストに追加
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo 'deb http://dl.yarnpkg.com/debian/ stable main' > /etc/apt/sources.list.d/yarn.list

# アプリケーションの依存関係
COPY docker/app/Aptfile /tmp/Aptfile
RUN apt-get update -qq && DEBIAN_FRONTEND=noninteractive apt-get -yq dist-upgrade && \
    DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    libpq-dev \
    postgresql-client-${PG_MAJOR} \
    nodejs \
    yarn=${YARN_VERSION}-1 \
    $(grep -Ev '^\s*#' /tmp/Aptfile | xargs) && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    truncate -s 0 /var/log/*log

# bundlerの設定
ENV LANG=C.UTF-8 \
    BUNDLE_JOBS=4 \
    BUNDLE_RETRY=3s

WORKDIR /app

# Add a script to be executed every time the container starts.
COPY docker/app/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000