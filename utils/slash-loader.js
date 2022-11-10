const Discord = require('discord.js')
const moment = require('moment')
const {Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js"),
      {readdirSync} = require("fs")
const fs = require("fs")
      const db = require("croxydb") 
      const Util = require('util')
        const { REST } = require("@discordjs/rest");
  const { Routes } = require("discord-api-types/v9");
module.exports = async(client, interaction) => {
  
  client.commands = new Collection()
    let commandPath = "./commands"
    for (const file of fs
      .readdirSync(commandPath)
      .filter((file) => file.endsWith(".js"))) {
      console.log(`Loaded command ${file}`);
      const command = require(`../commands/${file}`);
      client.commands.set(command.data.name, command);
    }

client.on('ready', async() => {

setInterval(() => { 
		const guildd = client.guilds.cache.size;
client.user.setPresence({ activities: [{ name: `${guildd} Servers`, url :'https://twitch.tv/iugur1', type: 'PLAYING' }] });
},60000) 

console.log("[BOT] | The status was set successfully.") 

      const globalCommands = Array.from(
          client.commands.filter((cmd) => cmd.global === true).values()
        ).map((m) => m.data);
    
        const rest = new REST({ version: "10" }).setToken(client.token);
    
        await rest
          .put(Routes.applicationCommands(client.user.id), { body: globalCommands })
          .catch(console.error);
  

console.log("[BOT] | Slash command loaded for " + client.guilds.cache.size + ".")
    
console.log(`[BOT] | ${client.user.tag} is online.`);

})

client.on("guildCreate", async(guild) => {
  console.log("added new server" + " Total servers:" + client.guilds.cache.size)
})

client.on('messageCreate', async(message) => {

if (message.content.startsWith("!eval")) {
      var args = message.content.split(" ").slice(1)
  if (message.author.id !== "676442309927370752") return
  let arguman = args.join(" ");
  if (!arguman) return
  let executedIn = process.hrtime();
  function clean(msg) {
    if (typeof msg !== "string")
      msg = Util.inspect(msg, { depth: 0 });
    msg = msg
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    executedIn = process.hrtime(executedIn);
    executedIn = executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);
    return msg
  }
  try {
    const evaled = clean(await eval(arguman));
    const embddddd = new Discord.EmbedBuilder()
   .setTitle("🥳 Kod başarıyla çalıştırıldı")
      .setDescription(`
> Kod parçacığı \`${executedIn.toFixed(3)} ms\` de **çalıştırıldı.**
      \`\`\`js\n${evaled}\`\`\`
      `)
     message.channel.send({embeds: [embddddd]});
  } catch(err) {
    console.log(err)
    message.channel.send({embeds: [
      new Discord.EmbedBuilder()
      .setTitle("🤯 Bir hata ile karşılaşıldı")
      .setDescription(`
      \`\`\`js\n${err}\`\`\`
      `)
      .setTimestamp()
                         ]});
  }
    }

})

  client.on('interactionCreate', async(interaction) => {
  
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) return
    var cmd;
    interaction.selectedValue = (interaction.options._hoistedOptions[0]) ? interaction.options._hoistedOptions[0].value : undefined

      command.run(client, interaction)
      
  })
}
