/// Charge les dépendances + config + Variable
const Discord = require('discord.js');
const { ownerId, token, prefix,} = require('./config.json');
const Bot = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
let statusIndex = 0;
const statuses = ['By G0Ki', 'github.com/g0k1'];

/// Status qui s'actualise

Bot.on('ready', () => {
  setInterval(() => {
    const status = statuses[statusIndex];
    Bot.user.setActivity(status, { type: 'WATCHING' });
    statusIndex = (statusIndex + 1) % statuses.length;
  }, 5000);
});




/// NE PAS TOUCHER CODE QUI ENVOIE LES MESSAGE !
Bot.on("message", message => {
  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != ownerId) {
      return message.reply('⛔Only Owner is Allowed to Use this Command⛔');
    } else {
      message.delete().catch(console.error);
      const args = message.content.split(" ").slice(1);
      const argresult = args.join(' ');

      if (message.guild) {
        message.guild.members.cache.forEach(member => {
          member.send(argresult)
            .then(() => console.log(`${member.user.username}#${member.user.discriminator}`))
            .catch(err => console.error(`🛑≈≈≈[DM's Disabled]≈≈≈ \n${member.user.username}#${member.user.discriminator}🛑`));
          console.log(`✅≈≈DONE≈≈✅`);
        });
        message.channel.send(`**✅ The message you have entered will be sent to all server members. ✅**`)
          .then(sentMessage => setTimeout(() => sentMessage.delete(), 1000));
      } else {
        message.channel.send('**🛑 This command can only be used in a server. 🛑**')
          .then(sentMessage => setTimeout(() => sentMessage.delete(), 1000));
      }
    }
  }
});

// Se connecte au bot 
Bot.login(token);
