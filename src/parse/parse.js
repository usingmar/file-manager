export const parseLine = (input) => {
    if(input.split(' ').length > 1) {
    return { command: input.split(' ')[0], args: input.split(' ').slice(1) }
}
    return { 'command': input.split(' ')[0], 'args': []}
}