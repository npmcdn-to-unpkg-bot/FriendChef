#!/bin/sh
mysql.server start
echo '=creating database called friends============================================='
echo '=loading schema onto database================================================='
mysql -u root < server/schema.sql






#-----------------Will fix this part later------------------------------
#=================No Touchy~ :)=========================================
# 'IF NOT EXISTS (SELECT 1 from pg_database where datname = 'friend')
#   CREATE DATABASE test
# END;'