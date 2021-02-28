const Discord = require("discord.js");

module.exports = {
    name: "emojilist",
    aliases: ["emojis"],
    description: "Send a All emojis for server",
    category: "Utility",
    usage: "emojilist <common/animated/all>",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    userPermissions: [],
    cooldown: 7,
    run: async (client, message, args, p) => {

        const emojisCommon = `**Emojis Common:** ${message.guild.emojis.cache.filter(a => !a.animated).size}\n${message.guild.emojis.cache.filter(a => !a.animated).map(x => x.toString()).join(" | ")}`;

        const emojisAnimated = `**Emojis Animated:** ${message.guild.emojis.cache.filter(a => a.animated).size}\n${message.guild.emojis.cache.filter(a => a.animated).map(x => x.toString()).join(" | ")}`;

        if (!args[0]) return message.channel.send(`<:HBminus:783351288515657728> | Please enter what kind of emojis you want to see.\nYou can use **\`"${p}help emojilist"\`** to know the correct use of the command`);

        switch (args[0]) {
            case 'common':
                message.channel.send(emojisCommon, {split: {char: ' ', maxLength: 1950}});
                break;
            case 'animated':
                message.channel.send(emojisAnimated, {split: {char: ' ', maxLength: 1950}});
                break;
            case 'all':
                message.channel.send(emojisCommon, {split: {char: ' ', maxLength: 1950}});
                message.channel.send(emojisAnimated, {split: {char: ' ', maxLength: 1950}});
                break;
            default:
                message.channel.send("<:HBminus:783351288515657728> | Please enter a valid opttion!\n`"+p+"emojilist <common/animated/all>`")
        };

    }
}
