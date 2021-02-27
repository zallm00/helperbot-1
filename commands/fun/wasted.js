const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "wasted",
    aliases: [],
    description: "Wasted a image",
    category: "Fun",
    usage: "wasted",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.wasted(avatar);

        let imagen = new Discord.MessageAttachment(datos, "WastedHelperBot.png");

        message.channel.send(imagen);
    }
};