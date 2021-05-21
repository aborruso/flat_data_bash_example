#!/bin/bash

set -x
set -e
set -u
set -o pipefail

# install Miller to process the CSV https://github.com/johnkerl/miller
sudo apt-get install miller -y

# retain only two columns of the input file
mlr --csv -I cut -f data,ricoverati_con_sintomi $1
