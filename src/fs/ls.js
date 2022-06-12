import fs from 'fs'
import { sendMessage } from '../UI/sendMessage.js';

export const ls = (currentPath, input) => {
    let files = fs.readdirSync(currentPath);
    console.log(files);
    return currentPath;
}