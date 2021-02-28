const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "hitler",
    aliases: [],
    description: "Worse than hitler",
    category: "Fun",
    usage: "hitler",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.hitler(avatar);

        let imagen = new Discord.MessageAttachment(datos, "HitlerHelperBot.png");

        message.channel.send(imagen);
    }
};