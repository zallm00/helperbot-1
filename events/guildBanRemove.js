const Discord = require("discord.js");
const Logs = require('../models/setlogs');

module.exports = async (client, guild, user) => {
  let ChannelLogs = await Logs.findOne({ guild: guild.id });
  if (!ChannelLogs) return;

  const embedNewBan = new Discord.MessageEmbed()
    .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
    .setDescription(`:airplane_arriving: ${user} **unbanned.**`)
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL({ dyanmic: true }))
    .setTimestamp()
    .setFooter("Helper Bot | Logs", client.user.displayAvatarURL())
    guild.channels.resolve(ChannelLogs.ChannelID).send(embedNewBan);
};
