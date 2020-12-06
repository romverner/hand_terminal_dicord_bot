require("dotenv").config()

const Discord = require("discord.js");
const fs      = require("fs");
const client  = new Discord.Client();

// Reading files from events folder.
fs.readdir("./events/", (err, files) => {
    /* 
        Discord API listens for "message", "ready", "guildMemberAdd" so
        file names were matched as a shortcut for loading/reading.
    */
    files.forEach((file) => {
        const eventHandler = require(`./events/${file}`);
        const eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventHandler(client,...args));
    });
});

client.login(process.env.BOT_TOKEN);