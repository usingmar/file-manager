import fs from 'fs'
import path from 'path'

export const cat = (currentPath, input) => {
    try{
    if(path.isAbsolute(input[0])) console.log(fs.readFileSync(fs.realpathSync(input[0])).toString());
    else console.log(fs.readFileSync(fs.realpathSync(currentPath + path.sep + input[0])).toString());
    }catch{
        console.log('FS operation failed');
        return currentPath;    
    }
    return currentPath;
}