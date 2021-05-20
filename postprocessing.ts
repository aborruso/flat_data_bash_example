import 'https://deno.land/x/flat@0.0.10/mod.ts'


// Forwards the execution to the python script
const py_run = Deno.run({
    cmd: ['./postprocessing.sh'].concat(Deno.args),
});

await py_run.status();
