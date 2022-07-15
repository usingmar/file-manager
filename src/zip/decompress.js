import {createBrotliDecompress} from 'zlib'
import { createReadStream, createWriteStream} from 'fs';
import { pipeline } from 'stream';
import path from 'path';
import fs from 'fs'

export const decompress = (currentPath, input) => {
    let readFileStream = null;
    let writeFileStream = null;

    try{
    if(path.isAbsolute(input[0])){readFileStream = createReadStream(input[0]);}
    else {readFileStream = createReadStream(fs.realpathSync(currentPath + path.sep + input[0]));}
    if(path.isAbsolute(input[1])) { 
        let fd = fs.openSync(input[1],'w');       
        if(fd)fs.closeSync(fd);
        writeFileStream = createWriteStream(input[1]);
    }
    else {
        let fd = fs.openSync(currentPath + path.sep + input[1],'w');       
        if(fd)fs.closeSync(fd);
         writeFileStream = createWriteStream(fs.realpathSync(currentPath + path.sep + input[1]));
        }

    const compress = createBrotliDecompress();

    pipeline(
        readFileStream,
        compress,
        writeFileStream,
        (error) => {
            if(error) throw error;
        }
    );
    }catch(error){
        console.log(error);//'Zip operation failed
        return currentPath;
    }
    return currentPath;
};