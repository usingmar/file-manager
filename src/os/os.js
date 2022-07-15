import sys from 'os'

export const os = (currentPath, input) => {
    switch(input[0]){
    case '--EOL':{ console.log(sys.EOL); break;}
    case '--cpus': {console.log(sys.cpus()); break;}
    case '--homedir': {console.log(sys.homedir()); break;}
    case '--username': {console.log(sys.userInfo().username); break;}
    case '--architecture': {console.log(sys.arch()); break;}
    default: {console.log('\nInvalid Input\n'); break;}
    }
    return currentPath;
}