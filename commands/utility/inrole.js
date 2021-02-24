const Discord = require("discord.js");

module.exports = {
  name: "inrole",
  aliases: [],
  description: "You can see the members with the role",
  category: "Utility",
  usage: "inrole <role>",
  cooldown: 2,
  run: async (client, message, args) => {

    const role = message.mentions.roles.firts || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(e => e.name.match(new RegExp(`${args[0]}`, 'gi')));

    if (!role) return message.channel.send("<:HBminus:783351288515657728> | You must mention a role!");

    let i = 0;
    const membersxd = role.members.filter((x) => x.user.tag !== message.guild.id).map((x) => `[${++i}] ${x.user.tag}`)
    const listaRoles = membersxd.length > 25 ? `${membersxd.slice(0, 25).join('\n')}\n# and ${membersxd.length - 25} more members` : membersxd.join('\n');

    function css(str) {
        return `\`\`\`css\n${str}\n\`\`\``;
      };

    const embedInRole = new Discord.MessageEmbed()
        .setTitle(`Members with the role:\n\`${role.name}\` - \`${role.members.size}\``)
        .setDescription(css(listaRoles))
        .setColor(role.hexColor || "BLUE")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter("Helper Bot | Utility System", client.user.displayAvatarURL());
        message.channel.send(embedInRole);
  }
}