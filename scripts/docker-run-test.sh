#!/usr/bin/env bash
set -a
source env/test.env
docker-compose -f docker-compose/docker-compose.test.yml build api
docker-compose -f docker-compose/docker-compose.test.yml up --abort-on-container-exit