const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json")


client.on("ready", () => {
  console.log('Bot Iniciado Com Sucesso!!!')
}


client.on('message', msg => {
    if (msg.content === '+creditos') {
        msg.channel.send('Criado por Bruno França Benevides Nunes usando javascript e a biblioteca discord.js. Instagram: Brunofrancabene. Github: Bruno261109js');
    }
});


client.on('message', msg => {
    if (msg.content === '+chupadadimensional') {
      msg.channel.send('https://tenor.com/view/chupada-dimensional-kamui-obito-sharingan-gif-12857310');
    }
  });


  client.on('message', msg => {
if (msg.content === '+oracaojashin') {
      msg.channel.send('https://media.discordapp.net/attachments/806281901966098436/806512669548871750/hidan.jpg?width=1120&height=630');
    }
  });


  client.on('message', msg => {
    if (msg.content === '+rapdolevi') {
      msg.channel.send('https://www.youtube.com/watch?v=FyAd9ZYQlQk&t=90s');
    }
  });


  client.on('message', msg => {
    if (msg.content === '+pocoto') {
      msg.channel.send('Upa Upa Pocoto! https://media.tenor.co/videos/f7497df42b4bb2b13ddfa53ca8ae953b/mp4');
    }
  });


  client.on('message', msg => {
    if (msg.content === '+supera') {
      msg.channel.send('O PAIN MORREU, SUPERA!!! https://media.tenor.co/videos/5f22d2c1dfb8b824b9bf23b2769c081e/mp4');
    }
  });


  client.on('message', msg => {
    if (msg.content === 'comando') {
      msg.channel.send('resposta');
    }
  });


  client.on('message', msg => {
    if (msg.content === '+penseiemtudo') {
      msg.channel.send('Ja pensei em tudo! https://media.tenor.co/videos/2fcaea106aa97817b4a03fe6beef0707/mp4');
    }
  });

  client.on('message', msg => {
    if (msg.content === '+piriplimplim') {
      msg.channel.send('uuui piriplimplim! https://media.tenor.co/videos/e8cfe46fbc7b3d6b4a36c0555f21fbbc/mp4');
    }
  });
  

  client.login('token'); 