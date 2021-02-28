const Discord = require("discord.js");

module.exports = {
    name: "addemoji",
    aliases: [],
    description: "Add external emojis on your server",
    category: "Utility",
    usage: "addemoji <emoji> <emoji> <emoji>",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "MANAGE_EMOJIS"],
    userPermissions: ["MANAGE_EMOJIS"],
    cooldown: 3,
    run: async (client, message, args) => {

        if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send("<:HBminus:783351288515657728> | You don't have `MANAGE_EMOJIS` permission!");
        if (!message.guild.me.permissions.has("MANAGE_EMOJIS")) return message.channel.send("<:HBminus:783351288515657728> | I need `MANAGE_EMOJIS` permission!");

        if (!args.length) return message.channel.send("<:HBminus:783351288515657728> | Please specify some emojis!");

        for (const rawEmoji of args) {
            const parsedEmoji = Discord.Util.parseEmoji(rawEmoji);
            if (parsedEmoji.id == null) return message.channel.send("<:HBminus:783351288515657728> | Please enter a valid emoji!");

            if (parsedEmoji.id) {
                try {
                    const extension = parsedEmoji.animated ? '.gif' : '.png';
                    const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                    message.guild.emojis.create(url, parsedEmoji.name).catch((e) => {
                        message.channel.send(`<:HBminus:783351288515657728> | ${e}`);
                        return;
                    })
                        .then((emoji) => message.channel.send(`<:HBchecked:783351288171593728> | **Added:**\n\`${emoji.url}\``)).catch(() => {})
                } catch (err) {
                    message.channel.send("<:HBminus:783351288515657728> | The server reached the maximum number of Emojis. Therefore I cannot add more emojis.")
                }
            }
        }

    }
}
