import sys from 'os'

export const os = (currentPath, input) => {
    switch(input[0]){
    case --EOL: console.log(sys.EOL);
    case --cpus: console.log(sys.cpus());
    case --homedir: console.log(sys.homedir());
    case --username: console.log(sys.userInfo.username);
    case --architecture: console.log(sys.arch());
    default: console.log('\nInvalid Input\n');
    }
    return currentPath;
}