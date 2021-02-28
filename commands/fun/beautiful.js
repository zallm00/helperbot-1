const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "beautiful",
    aliases: [],
    description: "Oh this? This is beautiful!",
    category: "Fun",
    usage: "beautiful",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
    userPermissions: [],
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.members.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.beautiful(avatar);

        let imagen = new Discord.MessageAttachment(datos, "BeautifulHelperBot.png");

        message.channel.send(imagen);
    }
};
