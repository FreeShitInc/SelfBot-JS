var config = require("./config.json");

if (process.argv.includes("--dev")) {
    config = require("./devconf.json");
}
console.log(config);

const { Client } = require('discord.js-selfbot-v13');
const client = new Client({});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

cmdLoop = false;

client.on("messageCreate", async (m) => {
    if (config.commandIdWhitelist.includes(m.author.id)) {
        if (m.content.startsWith(config.commandPrefix)) {
            let cmd = m.content.replace(config.commandPrefix, "").match("^.[^\ ]+")[0];
            let cmdarg = m.content.replace(/^[^\ ]*./, "");
            if (config.autoDeleteCommands) {
                try {
                    await m.delete();
                } catch (e) {
                    console.log("failed to delete command message");
                }
            }
            switch(cmd) {
                case "stop":
                    cmdLoop = false;
                case "spam":
                    cmdLoop = true;
                    while (cmdLoop) {
                        if (m.content.replace(/^[^\ ]*./, "") !== "") {
                            await m.channel.send(m.content.replace(/^[^\ ]*./, ""));
                        }
                    }
                case "roleinfo":
                    await m.guild.roles.fetch(cmdarg.replace(/[^0-9]/gi, "")).then(role => m.channel.send(`Color: ${role.color} Name: ${role.name} Perms: ${role.permissions.toArray()}`));
            }
        }
    }
})

client.login(config.token);
