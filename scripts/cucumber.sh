#!/usr/bin/env bash
node_modules/.bin/dotenv -e env/test.env -- node_modules/cucumber/bin/cucumber-js --require 'features/support/**/*.ts' --require-module ts-node/register $1