import crypto from 'crypto'
import fs from 'fs'

export const calcHash = (currentPath, input) => {
if(path.isAbsolute(input[0])) {
        console.log(crypto.createHash('sha256').update(fs.readFileSync(input[0], 'utf8')).digest('hex'));
}else console.log(crypto.createHash('sha256').update(fs.readFileSync(fs.realpathSync(currentPath + path.sep + input[0]), 'utf8')).digest('hex'));
return currentPath;
}