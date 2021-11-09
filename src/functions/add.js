const meta = {
        "name": "add",
        "command": "/add",
        "args": ["number","number"],
        "delimiter": " "
}
const main = function(a, b){
    a = parseInt(a);
    b = parseInt(b)
    return a + b;
}

module.exports = {
    main,
    meta
};