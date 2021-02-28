const Discord = require("discord.js");

module.exports = {
  name: "servers",
  aliases: ["guilds"],
  description: "Shows the bot's servers",
  category: "Utility",
  usage: "servers",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 3,
  run: async (client, message, args) => {

    const embedServers = new Discord.MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle("<:HBinformation:783351288062672896> Information")
      .setDescription([
        `**Users:** ${client.guilds.cache.reduce((c, v) => c + v.memberCount, 0).toLocaleString()}`,
        `**Guilds:** ${client.guilds.cache.size}`,
        `**Channels:** ${client.channels.cache.size}`,
        `**Emojis:** ${client.emojis.cache.size}`,
        `**Ping:** ${client.ws.ping}`
      ])
      .setColor("#0CFF00")
    message.channel.send("<a:HBloading:814700547382050846> **Obtaining Data!**").then((msg) => {
      setTimeout(() => {
        msg.delete()
        msg.channel.send(embedServers);
      }, 5000)
    });

  }
}
