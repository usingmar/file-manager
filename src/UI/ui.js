import readline from 'node:readline'
import os from 'node:os'
import { sendMessage } from './sendMessage.js';
import { commands } from '../utils.js';
import { validate } from '../validation/validation.js';
import { parseLine } from '../parse/parse.js';

export const UI = readline.createInterface(process.stdin, process.stdout);

export const createUI = (username) => {
    let currentPath = os.homedir();
    sendMessage('You are currently in ' + currentPath + '\n>');

    UI.on('line', (line) => {
        let string = line.trim();
        if(string === '.close') { 
            UI.close();
            process.exit(0);
        }
        if(validate(string)){ 
            let parsedInput = parseLine(string);
            commands.forEach((item) => {
                if(item.hasOwnProperty(parsedInput.command)) {
                    currentPath = item[parsedInput.command](currentPath,parsedInput.args);
                }
            }) 
            sendMessage(`You are currently in ${currentPath}\n>`);
        }
        else sendMessage('\nInvalid input\n\nYou are currently in ' + currentPath + '\n>'); 
    });

    UI.on('close', () => {
        sendMessage('\nThank you for using File Manager, ' + username + '!');
        UI.close();
        process.exit(0);
    })
 }