const Discord = require("discord.js");
const red = require('reddit-fetch');

module.exports = {
  name: "meme",
  aliases: [],
  description: "A random meme for reddit",
  category: "Fun",
  usage: "meme",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
  userPermissions: [],
  cooldown: 4,
  run: async (client, message, args) => {

    red({
     subreddit: 'memes',
     sort: 'hot',
     allowNSFW: false,
     allowModPost: false,
     allowCrossPost: false,
     allowVideo: false
    }).then(post => {
     const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(post.title)
      .setImage(post.url)
      .setFooter("Helper Bot | Fun", client.user.displayAvatarURL())
     if(!post.url){
       return message.channel.send("<:HBwarning:783351287944970251> | I didn't find any meme!")
     } else {
       message.channel.send(embed)
    }
  }).catch((e) => message.channel.send(`<:HBwarning:783351287944970251> | **${e.name}:** ${e.message}`))

  }
}
