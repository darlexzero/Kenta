const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()

///////////////////////BOT//////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("guildMemberAdd", async member => {
  const canal = member.guild.channels.cache.find(c => c.name === '╭﹕-୨🌎୧-˚⊹generalˊˎ');
  if(!canal) return;
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL({format: "png", dynamic: true}))
  .setDescription(`Bienvenido <@${member.id}> al servidor de Papitas de Kanna♥ Espero que la pase bien es esta pequeña comunidad de vtuber puedes pasarte por <#718234876268249199> y por <#7817301813757476904> para ver que castigo puede llegar a tener si no cumples las reglas`)
  .setThumbnail(member.user.displayAvatarURL({format: "png", dynamic: true}))
  .setColor(0X53E5EC)
  .setImage("https://media.discordapp.net/attachments/817295605700231208/817635443457392640/yyyyyyyyyy.png?width=743&height=498")
  .setFooter(member.guild.name)
  canal.send(embed);
  member.roles.add('882364783750443079');


}); 

client.on("message", message => {
  if(message.channel.id === "883759882963152927"){
   
    

