#!/bin/sh

REPO=https://github.com/gizak/gizak.github.io.git
TEMP=.build

# clone build into temp
rm -rf $TEMP
git clone $REPO $TEMP --branch master --single-branch --depth 1

# empty temp dir
cd $TEMP
shopt -s extglob
rm -rf !(.git)
cd -

# fill temp dir and push
cp -R resources/public/* $TEMP/
cd $TEMP
git add --all
git commit -m "$1"
git push origin master
cd -

rm -rf $TEMP
