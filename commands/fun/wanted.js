const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "wanted",
    aliases: [],
    description: "Wanted a image",
    category: "Fun",
    usage: "wanted",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.wanted(avatar);

        let imagen = new Discord.MessageAttachment(datos, "WantedHelperBot.png");

        message.channel.send(imagen);
    }
};