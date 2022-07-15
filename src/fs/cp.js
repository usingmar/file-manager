import path from 'path'
import fs from 'fs'

export const cp = (currentPath, input) => {
    try{
        if(path.isAbsolute(input[0])) fs.copyFileSync(input[0], input[1]);
    else fs.copyFileSync(fs.realpathSync(currentPath + path.sep + input[0]), input[1]);
    }catch{
        console.log('FS operation failed');
        return currentPath;
    }
    return currentPath;
}