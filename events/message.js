const kick   = require("../commands/kick");
const help   = require("../commands/help");
const search = require("../commands/search");
const roll   = require("../commands/roll");

module.exports = (client, message) => {
    if (message.content.startsWith("!kick")) {
        return kick(message);
    } else if (message.content.startsWith("!help")) {
        return help(message);
    } else if (message.mentions.has(client.user) 
               && message.content.includes('search ')) {
        search(message);
    } else if (message.content.startsWith("roll ")) {
        roll(message);
    };
};