const Discord = require("discord.js");

module.exports = {
    name: "waifu",
    aliases: [],
    description: "Get a random Waifu created by an AI from `[ThisWaifuDoesNotExist](https://www.thiswaifudoesnotexist.net/)`",
    category: "Fun",
    usage: "waifu",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
    userPermissions: [],
    cooldown: 3,
    run: async (client, message, args) => {

        let id = Math.floor(Math.random() * 10000);

        try {
            let img = 'https://www.thiswaifudoesnotexist.net/example-' + id + '.jpg';
            const embedWaifu = new Discord.MessageEmbed()
                .setTitle("__**Random Waifu**__")
                .setColor("#FF71F4")
                .setImage(img)
                .setFooter("Waifu created by an AI | www.thiswaifudoesnotexist.net")
            message.channel.send(embedWaifu);
        } catch (e) {
            message.channel.send(`<:HBwarning:783351287944970251> | **${e.name}:** ${e.message}`);
        };
        /*
        Thanks KO_ver2#8529 ❤️
        */
    }
}
