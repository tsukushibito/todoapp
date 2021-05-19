#!/bin/bash
. .env
docker-compose run --rm web sh -c "npm install -g create-react-app && create-react-app ."