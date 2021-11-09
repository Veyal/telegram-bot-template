const env = require('./env.json');
const commands = [];
const helper = require('./src/utilities/helper.js');

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(env.token, {polling: true});


// Combine all commands into one object
const functions = {}
var normalizedPath = require("path").join(__dirname, "src/functions");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if (file.endsWith(".js")) {
        commands.push(require("./src/functions/" + file).meta);
        functions[file.slice(0, -3)] = require("./src/functions/" + file).main;
    }
});
// End of combining commands

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const raw_cmd = helper.getCommand(msg.text);
    const raw_content = helper.getContent(msg.text).trim();

    console.log(`${raw_cmd} : ${raw_content}`);

    const idx = commands.map(c => c.command).indexOf(raw_cmd);
    if(idx > -1) {
        const functionName = commands[idx].function;
        const delimiter = commands[idx].delimiter;
        const args = (raw_content=='') ? [] : raw_content.split(delimiter);
        const expected_args = commands[idx].args;
        let isValid = true;

        // Check if the number of arguments is correct
        if(args.length != expected_args.length) {
            return bot.sendMessage(chatId, `Invalid number of arguments.\nExpected: ${expected_args.length}`);
        }

        // Check if the arguments are correct
        args.forEach((arg, i) => {
            console.log(helper.checkDataType(arg))
            if(helper.checkDataType(arg) != expected_args[i]) {
                isValid = false;
                return bot.sendMessage(chatId, `Invalid data type for argument ${i + 1}.\nExpected: ${expected_args[i]}`);
            }
        });

        if(isValid){
            bot.sendMessage(chatId, functions[functionName](...args));
        }
    }else{
        bot.sendMessage(chatId, `${raw_cmd} is not a valid command`);
    }
});