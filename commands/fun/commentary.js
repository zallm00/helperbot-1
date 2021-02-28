const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: "commentary",
    aliases: [],
    description: "YouTube comment",
    category: "Fun",
    usage: "commentary",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
    userPermissions: [],
    cooldown: 5,
    run: async (client, message, args) => {

        let persona = message.mentions.users.first() || message.author;

        let res1 = await args.join(' ');

        if(!res1.length > 50) return message.channel.send("<:HBminus:783351288515657728> | The text cannot exceed 50 characters!");

        if (persona.id === message.author.id) {

            let avatarAuthor = message.author.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });
            let datosAuthor = await canvacord.Canvas.youtube({"avatar":avatarAuthor,"username":message.author.username, "content":args.join(" "), "dark":true});

            let imagenAuthor = new Discord.MessageAttachment(datosAuthor, "CommentaryHelperBot.png");

            return message.channel.send(imagenAuthor);
        };
        let res2 = await args.slice(1).join(' ');
        if(!res2.length > 50) return message.channel.send("<:HBminus:783351288515657728> | The text cannot exceed 50 characters!");

        let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png', size: 2048 });

        let datos = await canvacord.Canvas.youtube({"avatar":avatar,"username":persona.username, "content":args.slice(1).join(" "), "dark":true});

        let imagen = new Discord.MessageAttachment(datos, "CommentaryHelperBot.png");

        message.channel.send(imagen);
    }
};
