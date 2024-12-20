#!/bin/sh
sudo git pull origin development
sudo yarn install
sudo yarn build
sudo systemctl restart nginx
