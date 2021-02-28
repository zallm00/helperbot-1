const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "rainbow",
    aliases: [],
    description: "Rainbow a image",
    category: "Fun",
    usage: "rainbow",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
    userPermissions: [],
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.rainbow(avatar);

        let imagen = new Discord.MessageAttachment(datos, "RainbowHelperBot.png");

        message.channel.send(imagen);
    }
};
