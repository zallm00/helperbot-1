const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "blur",
    aliases: [],
    description: "Blur an image",
    category: "Fun",
    usage: "blur",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.members.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.blur(avatar);

        let imagen = new Discord.MessageAttachment(datos, "BlurHelperBot.png");

        message.channel.send(imagen);
    }
};