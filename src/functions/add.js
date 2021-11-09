const meta = {
        "name": "add",
        "command": "/add",
        "function":"add",
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