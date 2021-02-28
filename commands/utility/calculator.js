const Discord = require("discord.js");
const math = require("mathjs");

module.exports = {
    name: "calculate",
    aliases: ["calc", "calculator"],
    description: "Shows Calculated Answers Of User's Query",
    category: "Utility",
    usage: "calculate [query](mathematical)",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "EMBED_LINKS"],
    userPermissions: [],
    cooldown: 3,
    run: async (client, message, args) => {

        if (!args[0]) return message.channel.send("<:HBminus:783351288515657728> | Enter Something To Calculate");

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send("<:HBminus:783351288515657728> |  Enter Valid Calculation!\n\n**`List of Calculations:`** \n1. **sqrt equation**\n__Example:__ `sqrt(3^2 + 4^2) = 5`\n\n2. **Units to Units**\n__Example:__ `2 inch to cm = 0.58`\n\n3. **Complex Expressions Like**\n__Example:__ `cos(45 deg) = 0.7071067811865476`\n\n4. **Basic Maths Expressions**\n__Example:__ `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**");
        }

        let embed = new Discord.MessageEmbed()
            .setColor("#2AFF00")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            .addField("<:HBback:783351288091901952> **Operation**", `\`\`\`js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("<:HBnext:783351287692394536> **Result**", `\`\`\`js\n${result}\`\`\``)
            .setFooter("Helper Bot | Utility Sytem", client.user.displayAvatarURL());
        message.channel.send(embed);

    }
}
