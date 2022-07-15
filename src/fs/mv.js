import path from 'path'
import fs from 'fs'
import { PassThrough } from 'stream';


export const mv = (currentPath, input) => {
    let path1 = path.isAbsolute(input[0]) ? input[0] : fs.realpathSync(currentPath + path.sep + input[0]);
    const filename = path1.slice(path1.lastIndexOf(path.sep) + 1);
    let path2 = path.isAbsolute(input[1]) ? input[1] + path.sep + filename : 
        fs.realpathSync(currentPath + path.sep + input[1] + path.sep + filename);
    try{
        fs.copyFileSync(path1, path2);
            fs.rmSync(path1);
    }catch(error){
        console.log(error);
        return currentPath;
    }
    return currentPath;
}