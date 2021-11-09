const meta = {
    "name": "whoami",
    "command": "/whoami",
    "function":"whoami",
    "args": []
}

const main = function () {
    return "Hello There";
}

module.exports = {
    meta,
    main
};