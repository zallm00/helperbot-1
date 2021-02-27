const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "affect",
    aliases: [],
    description: "No, it doesn't affect my baby",
    category: "Fun",
    usage: "affect",
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.members.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.affect(avatar);

        let imagen = new Discord.MessageAttachment(datos, "AffectHelperBot.png");

        message.channel.send(imagen);
    }
};