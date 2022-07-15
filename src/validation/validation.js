import { commands } from "../utils.js";

const IsValidCommand = (input) => { 
    return commands.filter((item) => {
        if(item.hasOwnProperty(input.split(' ')[0])) return item.params === input.split(' ').slice(1).length ? true : false;
        return false
    }).length > 0 ? true : false;
}

export const validate = (input) => { 
    if(IsValidCommand(input)) return true
    else return false
}