const Discord = require('discord.js');
const config = require('./config/config.json');
const Enmap = require('enmap');
require('colors')
const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
});

client.setups = new Enmap({
    name: "setups",
    dataDir: "./databases"
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Odio a PhP', {
    type: 'PLAYING'
  })
});



function requerirhandlers(){
    ["command", "events", "distube", "reaccion_roles"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch(e){
            console.warn(e)
        }
    })
}
requerirhandlers();


client.login('TOKEN')
