#!/bin/sh
rm -rf public/ && mkdir public
./build.sh
chmod +x clean-build.sh