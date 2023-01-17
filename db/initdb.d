#!/bin/bash/env bash

set -e

psql -v 
ON_ERROR_STOP=1 
--username "$POSTGRES_USER" 
--dbname "$POSTGRES_DB" <<-EOSQL
