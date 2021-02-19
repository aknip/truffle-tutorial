#!/usr/bin/env bash
rm -rf truffle/app/node_modules
#npm cache verify
docker run --rm -v "$(pwd)/truffle/app":/data -w /data -it node:10 bash