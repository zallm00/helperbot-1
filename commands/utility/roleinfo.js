const Discord = require("discord.js");

module.exports = {
  name: "roleinfo",
  aliases: ["role"],
  description: "Give information about a role",
  category: "Utility",
  usage: "roleinfo <rol>",
  cooldown: 4,
  run: async (client, message, args) => {

    try {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(e => e.name.match(new RegExp(`${args[0]}`, 'gi')));


      if (!role) return message.channel.send("<:HBminus:783351288515657728> | You must mention a role!");
      function Markdown(str) {
        return `\`\`\`\n${str}\n\`\`\``;
      };

      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
      };

      const aaa = role.members.size / message.guild.memberCount * 100;

      console.log(aaa)

      const percentage = Math.round(aaa);
      console.log(percentage)

      const membersxd = role.members.filter((x) => x.id !== message.guild.id).map((x) => `${x}`)
      const listaRoles = membersxd.length > 10 ? `${membersxd.slice(0, 10).join(' | ')} and **${membersxd.length - 10}** more members` : membersxd.join(' | ');

      const EmbedRolInfo = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor(role.hexColor || "BLUE")
        .addField("<:HBinformation:783351288062672896> **Role Information:**", [
          `**Name:** ${role.name}`,
          `**Mention:** <@&${role.id}>`,
          `**ID:** ${role.id}`,
          `**Created At:** ${role.createdAt.toUTCString().substr(0, 16)} (${checkDays(role.createdAt)})`,
          `**Mentionable:** ${role.mentionable ? 'Yes' : 'No'}`,
          `**Separated:** ${role.hoist ? 'Yes' : 'No'}`,
          `**Managed by the system:** ${role.managed ? 'Yes' : 'No'}`,
          `**HexColor:** ${role.hexColor}`,
        ])
        .addField("<:HBuser:783351289114918973> **Role Members:**", [
          `**Members with the Role:** ${role.members.size}`,
          `**Percentage of Members with the Role:** ${percentage}%`,
          `**Members:**\n${listaRoles || "Has no members"}`
        ])
        .addField('<:HBshield:783351288313937991> **Role Permissions:**', Markdown(role.permissions.toArray().join(', ')))
        .setFooter(" Helper Bot | Utility System", client.user.displayAvatarURL())

      message.channel.send(EmbedRolInfo);
    } catch (e) {
      message.channel.send(`<:HBwarning:783351287944970251> | **${e.name}:** ${e.message}`);
    }

  }
}