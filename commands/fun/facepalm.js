const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "facepalm",
    aliases: [],
    description: "Facepalm",
    category: "Fun",
    usage: "facepalm",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.facepalm(avatar);

        let imagen = new Discord.MessageAttachment(datos, "FacepalmHelperBot.png");

        message.channel.send(imagen);
    }
};