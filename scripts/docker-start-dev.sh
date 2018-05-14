#!/usr/bin/env bash
set -a
source env/dev.env
#docker-compose -f docker-compose/docker-compose.dev.yml build api
#docker-compose -f docker-compose/docker-compose.dev.yml run -p 4000:4000 api
docker-compose -f docker-compose/docker-compose.dev.yml up -d