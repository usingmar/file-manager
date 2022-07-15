import {createUI} from '../UI/ui.js'

export const run = (username) => {
    console.log('Welcome to the File Manager, ' + username);
    createUI(username);
}