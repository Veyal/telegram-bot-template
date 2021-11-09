# How To Use

1. Create env.json file on root folder
```json
{
    "token": "*telegram bot token*"
}
```
2. Add New File to `/src/functions/` to create new commands using this templates
```javascript
const meta = {
        "name": "add",
        "command": "/add"
        "args": ["number","number"],
        "delimiter": " "
}
const main = function(a, b){
    a = parseInt(a);
    b = parseInt(b)
    return a + b;
}

module.exports = {
    meta,
    main
};
```