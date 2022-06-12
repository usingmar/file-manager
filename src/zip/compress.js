import {createBrotliCompress} from 'zlib'
import { createReadStream, createWriteStream, write } from 'fs';
import { pipeline } from 'stream';
import path from 'path';

export const compress = (currentPath, input) => {
    try{
    if(path.isAbsolute(input[0])) {const readFileStream = createReadStream(input[0]);}
    else {const readFileStream = createReadStream(fs.realpathSync(currentPath + path.sep + input[0]));}
    if(path.isAbsolute(input[1])) { const writeFileStream = createWriteStream('./files\\archive.gz');}
    else { const writeFileStream = createWriteStream(fs.realpathSync(currentPath + path.sep + input[1]));}

    const compress = createBrotliCompress();

    pipeline(
        readFileStream,
        compress,
        writeFileStream,
        (error) => {
            if(error) throw error;
        }
    );
    }catch{
        console.log('Zip operation failed');
        return currentPath;
    }
};