import {UI} from './ui.js'

export const sendMessage = (message) => {
    UI.setPrompt(message);
    UI.prompt();
}