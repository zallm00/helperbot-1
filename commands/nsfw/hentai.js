const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "hentai",
    aliases: [],
    description: "Hentai images (png, jpg or gif)",
    category: "NSFW",
    usage: "hentai",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    userPermissions: [],
    onlyNSFW: "Yes",
    cooldown: 3,
    run: async (client, message, args) => {

        if (!message.channel.nsfw) return message.channel.send("<:HBminus:783351288515657728> | You can't use this command in a no **NSFW** chat!");

        const voted = await client.dbl.hasVoted(message.author.id);
        if (!voted) return message.channel.send("<:HBminus:783351288515657728> | You cannot use this command without voting on top.gg!\nVote here https://top.gg/bot/761300013317488660/vote");

        const Image = await nsfw.hentai();
        const embed = new Discord.MessageEmbed()
            .setTitle("Enjoy it <:Heart:769240709206769684>")
            .setImage(Image)
            .setColor("RANDOM")
            .setFooter("Helper Bot | NSFW", client.user.displayAvatarURL());
        message.channel.send(embed);

    }
}
