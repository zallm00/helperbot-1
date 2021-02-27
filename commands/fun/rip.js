const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "rip",
    aliases: [],
    description: "\"F\" in the chat",
    category: "Fun",
    usage: "rip",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.rip(avatar);

        let imagen = new Discord.MessageAttachment(datos, "RipHelperBot.png");

        message.channel.send(imagen);
    }
};