const Discord = require("discord.js");
const canvacord = require("canvacord");
const isHexcolor = require('is-hexcolor');

module.exports = {
    name: "color",
    aliases: [],
    description: "color image",
    category: "Fun",
    usage: "color",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
    userPermissions: [],
    cooldown: 5,
    run: async (client, message, args) => {

        let hexColor = args.join(' ');

        if(!hexColor) return message.channel.send("<:HBminus:783351288515657728> | Provide a Hex color code. Without the `#`!");

        let no = isHexcolor(`#${hexColor}`);

        if(!no) return message.channel.send("<:HBminus:783351288515657728> | Provide a valid Hex color code!");

        let tag = hexColor.replace(/#+/g,"")

        let datos = await canvacord.Canvas.color(`#${tag}`);

        let image = new Discord.MessageAttachment(datos, "ColorHelperBot.png");

        const embedColor = new Discord.MessageEmbed()
        .setImage('attachment://ColorHelperBot.png').attachFiles(image)
        .setColor(`#${tag}`)
        .setDescription(`**#${tag}**`)
        message.channel.send(embedColor);
    }
};
