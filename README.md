# Using bash as postprocess script for GitHub's Flat Data actions


This repository demonstrates how to run a `bash` script as postprocess step for [GitHub's Flat Data actions](https://octo.github.com/projects/flat-data).

The idea is basic : use Deno to trigger the execution of a `bash` script.

The goal is simple:

- to download every day COVID-19 italian regional data CSV file;
- to retain only two columns of it.

This example also install the great [Miller](https://github.com/johnkerl/miller): it's like awk, sed, cut, join, and sort for data formats such as CSV, TSV, tabular JSON and positionally-indexed.


## Execution :

- the [Flat Data action](.github/workflows/flat.yml) is scheduled daily, and download the COVID-19 italian regional data CSV file from the [official repo](https://github.com/pcm-dpc/COVID-19) and stores it in `dpc-covid19-ita-regioni-latest.csv`;
- the [`postprocess.ts`](./postprocessing.ts) script is then run, and runs the bash script `postprocess.sh`. It also forwards the arguments;
- [`postprocess.sh`](./postprocessing.sh) takes the downloaded CSV file and retains only two columns of it.


## Thanks

Thanks to Pierre-Olivier Simonard for [its inspirational Python way](https://github.com/pierrotsmnrd/flat_data_py_example) to do it.
