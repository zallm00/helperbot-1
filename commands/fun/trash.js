const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "trash",
    aliases: [],
    description: "Trash a image",
    category: "Fun",
    usage: "trash",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
    userPermissions: [],
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.trash(avatar);

        let imagen = new Discord.MessageAttachment(datos, "TrashHelperBot.png");

        message.channel.send(imagen);
    }
};
