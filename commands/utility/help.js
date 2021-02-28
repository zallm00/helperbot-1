const Discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["cmds", "h"],
  description: "Provides user help",
  category: "Utility",
  usage: "help (command)",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
  userPermissions: [],
  cooldown: 9,
  run: async (client, message, args, p) => {
    let user = message.member;

    const utility = client.commands.filter(c => c.category == "Utility").map(c => '`'+c.name+'`').join(" | ");
    const moderation = client.commands.filter(c => c.category == "Moderation").map(c => '`'+c.name+'`').join(" | ");
    const config = client.commands.filter(c => c.category == "Config").map(c => '`'+c.name+'`').join(" | ");
    const fun = client.commands.filter(c => c.category == "Fun").map(c => '`'+c.name+'`').join(" | ");
    const music = client.commands.filter(c => c.category == "Music").map(c => '`'+c.name+'`').join(" | ");
    const suggestions = client.commands.filter(c => c.category == "Suggestions").map(c => '`'+c.name+'`').join(" | ");
    const nsfw = client.commands.filter(c => c.category == "NSFW").map(c => '`'+c.name+'`').join(" | ");

    const cmd = client.commands.find(c => c.name == args[0]) || client.commands.find(c => c.aliases.includes(args[0]));

    let permissionsBot;
    if(!cmd) {
      permissionsBot = "Does not require Permissions"
    } else {
      permissionsBot = '`'+cmd.botPermissions.join(" | ")+'`'
    };

    let permissionsUser;
    if(!cmd) {
      permissionsBot = "Does not require Permissions"
    } else {
      permissionsBot = '`'+cmd.userPermissions.join(" | ")+'`'
    };

    if (cmd) {
      const embed = new Discord.MessageEmbed()
        .setColor("#0FFF00")
        .setTitle(`__**Command Help**__`)
        .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
        .addField("**Name:**", cmd.name)
        .addField("**Category:**", cmd.category)
        .addField("**Aliases:**", cmd.aliases.join(" | ") || "Has No Aliases")
        .addField("**Description:**", cmd.description || "Has No Description")
        .addField("**Usage:**", `${p}${cmd.usage}`)
        .addField("**Bot Permissions:**", `${permissionsBot}`)
        .addField("**User Permissions:**", `${permissionsUser}`)
        .addField("**Cooldown:**", new String(cmd.cooldown).split("0")[0] + "s" || "Has No Cooldown");
      return message.channel.send(embed);
    };

    const OneEmbed = new Discord.MessageEmbed()
      .setColor("#AA00FF")
      .setDescription(`Hello **${message.member.displayName || message.author.username}**! I am **Helper Bot**.\nThese are all my commands!\n[Invite me](https://discord.com/api/oauth2/authorize?client_id=761300013317488660&permissions=1077243334&scope=bot) | [Support Server](https://discord.gg/jNQkg9qdDM)`)
      .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .addField(`**Music [${client.commands.filter(c => c.category == "Music").size}]**`, music)
      .addField(`**Moderation [${client.commands.filter(c => c.category == "Moderation").size}]**`, moderation)
      .addField(`**Utility [${client.commands.filter(c => c.category == "Utility").size}]**`, utility)
      .addField(`**Suggestions [${client.commands.filter(c => c.category == "Suggestions").size}]**`, suggestions)
      .addField(`**Fun [${client.commands.filter(c => c.category == "Fun").size}]**`, fun)
      .addField(`**NSFW [${client.commands.filter(c => c.category == "NSFW").size}]**`, nsfw)
      .addField(`**Config [${client.commands.filter(c => c.category == "Config").size}]**`, config)
      .setImage("https://cdn.discordapp.com/attachments/359425464885837827/810769141790932992/standard.gif")
      .setFooter(`Use ${p}help <command-name> for more information about the command!`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(OneEmbed)

  },
};
