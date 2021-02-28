const Discord = require("discord.js");
const Canvas = require('canvas');

module.exports = {
  name: "simpcard",
  aliases: ["simp"],
  description: "",
  category: "Fun",
  usage: "simp",
  botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL", "ATTACH_FILES"],
  userPermissions: [],
  cooldown: 4,
  run: async (client, message, args) => {

    let persona = message.mentions.users.first() || message.author;

    let avatar = persona.displayAvatarURL({ dynamic: false, format: 'png'});

    const canvas = Canvas.createCanvas(318, 192);

    const ctx = canvas.getContext('2d');

    const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/750461925099307129/751872081175511050/IMG_20200905_133034_358.JPG');
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(70, 75, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.clip();
    let imagen = await Canvas.loadImage(avatar);
    ctx.drawImage(imagen, 20, 23.5, 100, 100);

    let imagenSend = new Discord.MessageAttachment(canvas.toBuffer(),"SimpCardHelperBot.png");

    message.channel.send(imagenSend);

  }
}
