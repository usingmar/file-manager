import path from 'path'
import fs from 'fs'
import { sendMessage } from '../UI/sendMessage.js'

export const add =  (currentPath, input) => { 
    try{
    let fd = fs.openSync(currentPath + path.sep + input[0],'ax');       
    if(fd)fs.closeSync(fd);
}catch{
    console.log('\nFs operation failed\n');
    return currentPath;
}finally{ 
    return currentPath
}
}