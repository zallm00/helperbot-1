const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "invert",
    aliases: [],
    description: "Invert a image",
    category: "Fun",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.invert(avatar);

        let imagen = new Discord.MessageAttachment(datos, "InvertHelperBot.png");

        message.channel.send(imagen)
    }
};