import fs from './fs/script.js'
import {os} from './os/os.js'
import {calcHash} from './hash/calcHash.js'
import zip from './zip/script.js'

export const commands = [
    { 'up': fs.up, params: 0 }, { 'cd': fs.cd, params: 1 },
    { 'ls': fs.ls, params: 0 }, { 'cat': fs.cat, params: 1 },
    { 'add': fs.add, params: 1 }, { 'rn': fs.rn, params: 2 },
    { 'cp': fs.cp, params: 2 }, { 'mv': fs.mv, params: 2 },
    { 'rm': fs.rm, params: 1 }, { 'os': os, params: 1 },
    { 'hash': calcHash, params: 1 }, { 'compress': zip.compress, params: 2 },
    { 'decompress': zip.decompress, params: 2}
]