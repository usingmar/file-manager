import fs from 'fs'
import path from 'path'

export const rm = (currentPath, input) => {
    try{
        if(path.isAbsolute(input[0]))
        fs.rmSync(input[0]);
        else fs.rmSync(currentPath + path.sep + input[0]);
    }catch{
        console.log('FS operation failed');
        return currentPath;
    }
    return currentPath;
}