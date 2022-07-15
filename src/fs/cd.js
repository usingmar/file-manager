import path, { resolve } from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import {sendMessage} from '../UI/sendMessage.js'

export const cd = (currentPath, input) =>{
    let resPath = currentPath;
    try{
    if(path.isAbsolute(input[0])){
       resPath = fs.realpathSync(input[0]);
    }else{ resPath = fs.realpathSync(currentPath + path.sep + input[0]); }
    }catch(error){
        console.log('FS operation failed');
        return resPath;
    }
    return resPath;
}