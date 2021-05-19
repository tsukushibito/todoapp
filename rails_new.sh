#!/bin/bash
. .env
docker-compose run app rails new . --force --no-deps --database=postgresql --skip-bundle --api
# docker compose run app bundle exec rails webpacker:install