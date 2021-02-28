const Discord = require("discord.js");

module.exports = {
  name: "gay",
  aliases: [],
  description: "Random gay percentage",
  category: "Fun",
  usage: "gay",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 3,
  run: async (client, message, args) => {

    let mention = message.mentions.users.first() || message.author;

    if(mention == client.user.id)
      return message.channel.send("<:HBminus:783351288515657728> | I am no Gay!");

    let number = Math.floor(Math.random() * 100);

    const embedGay = new Discord.MessageEmbed()
      .setThumbnail(mention.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`**${mention.tag}** is **${number}%** Gay! :rainbow_flag:`);
      message.channel.send(embedGay);

  }
}
