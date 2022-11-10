const Discord = require('discord.js');
const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js") 
const db = require('croxydb') 

const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("deneme")
    .setDescription("Deneme komudu")
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("Kimin avatarına bakmak istersin?")
        .setRequired(false)
        ),
    global: true,
    run: async (client, interaction) => {

        const user = interaction.options.getUser("user")
        const member = user || interaction.user

        const embed = new Discord.EmbedBuilder()
        .setDescription(`${member} avatar' ı`)
        .setImage(member.avatarURL({format: "png"}))

        interaction.reply({ embeds: [embed], ephemeral: true })
} 
}