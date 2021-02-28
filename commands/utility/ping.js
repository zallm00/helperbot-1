const Discord = require("discord.js");
const e = require("express");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Ping the API and the Bot",
  category: "Utility",
  usage: "ping",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 3,
  run: async (client, message, args) => {

    var ping = client.ws.ping;

    let emote;
    if (ping > 1700) {
      emote = '<:HBminus:783351288515657728>'
    } else if (ping > 1500) {
      emote = '<:HBminus:783351288515657728>'
    } else if (ping > 1000) {
      emote = '<:HBminus:783351288515657728>'
    } else if (ping > 900) {
      emote = '<:HBminus:783351288515657728>'
    } else if (ping > 700) {
      emote = '<:HBminus:783351288515657728>'
    } else if (ping > 300) {
      emote = '<:HBwarning:783351287944970251>'
    } else if (ping > 100) {
      emote = '<:HBchecked:783351288171593728>'
    } else if (ping > 50) {
      emote = '<:HBchecked:783351288171593728>'
    } else if (ping > 30) {
      emote = '<:HBchecked:783351288171593728>'
    } else if (ping > 10) {
      emote = '<:HBchecked:783351288171593728>'
    };

    let color;
    if (ping > 1700) {
      color = "#FF0000"
    } else if (ping > 1500) {
      color = "#FF0000"
    } else if (ping > 1000) {
      color = "#FF0000"
    } else if (ping > 700) {
      color = "#FF0000"
    } else if (ping > 300) {
      color = "#FF9300"
    } else if (ping > 100) {
      color = "#2EFF00"
    } else if (ping > 50) {
      color = "#2EFF00"
    } else if (ping > 30) {
      color = "#2EFF00"
    } else if (ping > 10) {
      color = "#2EFF00"
    };

    let date = Date.now();
    let p = new Promise((r, j) => {
      require('mongoose').connection.db.admin().ping((err, result) => (err || !result) ? j(err || result) : r(Date.now() - date))
    });

    const embedPing = new Discord.MessageEmbed()
      .setTitle("<:HBinformation:783351288062672896> Ping")
      .setDescription([
        `Message Ping: **${Date.now() - message.createdTimestamp}**ms`,
        `API Ping: **${client.ws.ping}**ms`,
        `DB Ping: **${await p}**ms`,
        `Status: ${emote}`
      ])
      .setColor(color)
    message.channel.send(embedPing);

  }
}
