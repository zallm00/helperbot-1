const Discord = require("discord.js");
const humanizeDuration = require("humanize-duration");

module.exports = {
  name: "channelinfo",
  aliases: ["chinfo"],
  description: "Gives information about a channel",
  category: "Utility",
  usage: "channelinfo",
  cooldown: 3,
  run: async (client, message, args) => {

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;

    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    };

    let type = {
      "dm" : "DM",
      "text" : "Text",
      "voice" : "Voice",
      "category" : "Category",
      "news" : "News",
      "store" : "Store",
      "unknown" : "Unknown"
    }


    const embed = new Discord.MessageEmbed()
      .addField(`<:HBinformation:783351288062672896> **Channel Information**:`, [
        `**Name:** ${Discord.Util.escapeMarkdown(channel.name)}`,
        `**Mention:** ${channel}`,
        `**ID:** ${channel.id}`,
        `**Created At:** ${channel.createdAt.toUTCString().substr(0, 16)} (${checkDays(channel.createdAt)})`,
        `**Channel Type:** ${type[channel.type]}`,
        `**NSFW:**: ${channel.nsfw ? "Yes" : "No"}`,
        `**Channel Parent:** ${channel.parent ? channel.parent.name : "Has no Parent"}`
      ])
      .setColor("RANDOM")
      .setFooter(" Helper Bot | Utility System", client.user.displayAvatarURL());
    message.channel.send(embed);

  }
}