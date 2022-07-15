import {dirname, sep} from 'path'

export const up = (currentPath, args) =>{
    return dirname(currentPath + sep)
}