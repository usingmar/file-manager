import fs from 'fs'
import path from 'path'


export const rn = (currentPath, input) => {
    try{
    if(path.isAbsolute(input[0])) fs.renameSync(input[0], input[1]);
    else fs.renameSync(fs.realpathSync(currentPath + path.sep + input[0], input[1]));
    }catch{
        console.log('FS operation failed');
        return currentPath;
    }
    return currentPath;
}