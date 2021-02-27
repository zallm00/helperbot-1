const Discord = require('discord.js')
const Logs = require('../models/setlogs.js')

module.exports = async (client, oldMember, newMember) => {

    const Log = await Logs.findOne({ guild: newMember.guild.id })
    if (!Log) return;
    if (oldMember.displayName !== newMember.displayName) {

        const Update = new Discord.MessageEmbed()

            .setAuthor(newMember.guild.name, newMember.guild.iconURL({ dynamic: true }))
            .setTitle(`__MemberNicknameUpdate__`)
            .setColor('RANDOM')
            .setThumbnail(newMember.user.displayAvatarURL({ dynamic: true }))
            .addField(`<:HBuser:783351289114918973> **Member:**`, `${newMember} | ${newMember.id}`)
            .addField(`<:HBback:783351288091901952> **Old Nickname:**`, `${oldMember.displayName}`)
            .addField(`<:HBnext:783351287692394536> **New Nickname:**`, `${newMember.displayName}`)
            .setFooter(`Helper Bot | Logs System`, client.user.displayAvatarURL())
            .setTimestamp()

        client.channels.cache.get(Log.ChannelID).send(Update)
    };


    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        const role = oldMember.roles.cache.difference(newMember.roles.cache)

        const RolesAdd = new Discord.MessageEmbed()
            .setAuthor(newMember.guild.name, newMember.guild.iconURL({ dynamic: true }))
            .setTitle(`__MemberRolesAdd__`)
            .addField(`<:HBuser:783351289114918973> **Member:**`, `${newMember} | ${newMember.id}`)
            .addField(`<:HBnext:783351287692394536> **Roles Add:**`, `${role.map(x => x)} | ${role.map(x => x.id)}`)
            .setThumbnail(newMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`Helper Bot | Logs System`, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RANDOM')
        client.channels.cache.get(Log.ChannelID).send(RolesAdd)
    };
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
        const role = oldMember.roles.cache.difference(newMember.roles.cache)

        const RolesRemove = new Discord.MessageEmbed()
            .setAuthor(newMember.guild.name, newMember.guild.iconURL({ dynamic: true }))
            .setTitle(`__MemberRolesRemove__`)
            .addField(`<:HBuser:783351289114918973> **Member:**`, `${newMember} | ${newMember.id}`)
            .addField(`<:HBminus:783351288515657728> **Roles Remove:**`, `${role.map(x => x)} | ${role.map(x => x.id)})`)
            .setThumbnail(newMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`Helper Bot | Logs System`, client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RANDOM')
        client.channels.cache.get(Log.ChannelID).send(RolesRemove);
    }

};