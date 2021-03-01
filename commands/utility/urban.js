const Discord = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "urban",
  aliases: [],
  description: "",
  category: "Utility",
  usage: "urban <word>",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 4,
  run: async (client, message, args) => {

    if(!message.channel.nsfw) return message.channel.send("<:HBminus:783351288515657728> | You can't use this command in a no **NSFW** chat!");

    let query = args.join(" ");
    if(!query) return message.channel.send("<:HBminus:783351288515657728> | Please specify a word to search for!");

    try{
    query = encodeURIComponent(query);

    const { data: { list } } = await axios.get(`https://api.urbandictionary.com/v0/define?term=${query}`);

    const [ answer ] = list;

    message.channel.send("<:HBsearch:783351288149835857> Seraching...").then((msg) => {
      const embedWord = new Discord.MessageEmbed()
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .setColor("RANDOM")
        .addField("<:HBinformation:783351288062672896> **Definition:**", trim(answer.definition))
        .addField("<:HBsearch:783351288149835857> **Example:**", trim(answer.example))
        .setFooter(`${answer.thumbs_up} 👍 | ${answer.thumbs_down} 👎`)
        .setThumbnail(`${message.author.displayAvatarURL({dynamic:true})}`)
        setTimeout(() => {
          msg.delete()
          msg.channel.send(embedWord);
      }, 5000)
    });
    } catch(e) {
      message.channel.send(`<:HBwarning:783351287944970251> | **${e.name}:** ${e.message}`);
    };

  },
};

function trim(imput) {
  return imput.length > 1024 ? `${imput.length(0, 1020)} ...` : imput;
};
