const getCommand = (str) => {
    return str.split(' ')[0];
}
const getContent = (str) => {
    return str.split(' ').slice(1).join(' ');
}
const checkDataType = (str) => {
    if (!isNaN(str)){
        return 'number';
    }
    return 'string';
}


module.exports = {
    getCommand,
    getContent,
    checkDataType
}
