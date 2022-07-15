import path from 'path'
import fs from 'fs'
import { sendMessage } from '../UI/sendMessage.js'

export const add =  (currentPath, input) => { 
    try{
        if(path.isAbsolute(input[0])){
        let fd = fs.openSync(input[0],'wx');       
        if(fd)fs.closeSync(fd);
        }else {
            let fd = fs.openSync(currentPath + path.sep + input[0],'wx');       
        if(fd)fs.closeSync(fd);
        }
}catch(error){
    console.log(error);
    console.log('\nFs operation failed\n');
    return currentPath;
}finally{ 
    return currentPath
}
}