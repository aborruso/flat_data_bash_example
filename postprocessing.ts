import 'https://deno.land/x/flat@0.0.11/mod.ts'

// Forwards the execution to the bash script
const bash_run = Deno.run({
    cmd: ['./postprocessing.sh'].concat(Deno.args),
});

await bash_run.status();
