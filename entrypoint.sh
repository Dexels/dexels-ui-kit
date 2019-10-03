#!/bin/bash

cd /usr/local/src || exit 1
git clone https://$TOKEN@$REPO dexels-ui-kit
cd dexels-ui-kit || exit 1
git checkout $BRANCH
npm install
npm run-script storybook:build
npm run-script storybook

