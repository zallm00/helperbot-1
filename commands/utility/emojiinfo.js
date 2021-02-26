const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  name: "emojiinfo",
  aliases: ["emoji"],
  description: "Give the information of an emoji",
  category: "Utility",
  usage: "emoji :emoji:",
  cooldown: 3,
  run: async (client, message, args) => {

    let emojiProvided = args[0];

    
    if(!emojiProvided) return message.channel.send('<:HBminus:783351288515657728> | Provide an emoji, It has to be from this server.');
    
    const match = emojiProvided.match(/<:[a-zA-Z0-9_-]+:(\d{18})>/) || emojiProvided.match(/<a:[a-zA-Z0-9_-]+:(\d{18})>/); 

    if (!match || !match[1]) {
        return message.channel.send('<:HBminus:783351288515657728> | Please provide a valid emoji.');
    }
    
    let emoji = message.guild.emojis.cache.get(match[1]);
    
    if(!emoji) return message.channel.send('<:HBminus:783351288515657728> | That emoji could not be identified on the server.');
    function checkDays(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
    };
    
    let embedEmojiInformation = new Discord.MessageEmbed()
    .setTitle(`<:HBinformation:783351288062672896> Emoji Information`)
    .setThumbnail(emoji.url) 
    .addField(`**Name:** ${emoji.name}`, [
      `**ID:** ${emoji.id}`,
      `**Added By:** ${await emoji.fetchAuthor().then(user => user.tag).catch(() => {}) || "I can't see who added it"}`,
      `**Animated:** ${emoji.animated ? 'Yes' : 'No'}`,
      `**Identifier:** \`<:${emoji.identifier}>\``,
      `**Created At:** ${emoji.createdAt.toUTCString().substr(0, 16)} (${checkDays(emoji.createdAt)})`,
      `**Emoji URL:** [Click here](${emoji.url})`
    ])
    .setColor('RANDOM');
    message.channel.send(embedEmojiInformation);

  }
}