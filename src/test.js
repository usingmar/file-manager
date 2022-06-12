import {fileURLToPath} from 'url'
import fs from 'fs'
import path from 'path'
import os from 'os'

fs.realpath('C:/' + path.sep + '../', (err, resPath) => {
        if(err) throw err;
        console.log(resPath);
})