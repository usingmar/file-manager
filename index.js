import {run} from './src/app/app.js'


const username = process.argv.slice(2)[0].slice(process.argv.slice(2)[0].indexOf('=') + 1);

run(username);
