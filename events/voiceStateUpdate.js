const Discord = require("discord.js");
const Logs = require('../models/setlogs');

module.exports =  async  (client, oldState, newState) => {
  let ChannelLogs = await Logs.findOne({ guild: newState.guild.id });
  if (!ChannelLogs) return;

  if(!oldState.channel && newState.channel){
    const embedJoinChannel = new Discord.MessageEmbed()
      .setDescription(`<:HBuser:783351289114918973> The User **${oldState.member.user.tag}**\n<:HBmicro:815673770567270501> Joined the **${newState.channel.name}** voice channel!`)
      .setColor("RANDOM")
      .setThumbnail(oldState.member.user.displayAvatarURL({ dynamic: true }))
      .setAuthor(newState.guild.name, newState.guild.iconURL({ dynamic: true }))
      .setFooter("Helper Bot | Logs", client.user.displayAvatarURL());
      newState.guild.channels.resolve(ChannelLogs.ChannelID).send(embedJoinChannel);
  };

  if(oldState.channel && !newState.channel){
    const embedJoinChannel = new Discord.MessageEmbed()
      .setDescription(`<:HBuser:783351289114918973> The User **${oldState.member.user.tag}**\n<:HBmicro:815673770567270501> Leaved the **${oldState.channel.name}** voice channel!`)
      .setColor("RANDOM")
      .setThumbnail(oldState.member.user.displayAvatarURL({ dynamic: true }))
      .setAuthor(oldState.guild.name, oldState.guild.iconURL({ dynamic: true }))
      .setFooter("Helper Bot | Logs", client.user.displayAvatarURL());
      oldState.guild.channels.resolve(ChannelLogs.ChannelID).send(embedJoinChannel);
  };

  if(oldState.channel && newState.channel && oldState.channel.id !== newState.channel.id){
    const embedJoinChannel = new Discord.MessageEmbed()
      .setDescription(`<:HBuser:783351289114918973> The User **${oldState.member.user.tag}**\n<:HBmicro:815673770567270501> Changed from **${oldState.channel.name}** to **${newState.channel.name}**!`)
      .setColor("RANDOM")
      .setThumbnail(newState.member.user.displayAvatarURL({ dynamic: true }))
      .setAuthor(newState.guild.name, newState.guild.iconURL({ dynamic: true }))
      .setFooter("Helper Bot | Logs", client.user.displayAvatarURL());
      newState.guild.channels.resolve(ChannelLogs.ChannelID).send(embedJoinChannel);
  };
};
