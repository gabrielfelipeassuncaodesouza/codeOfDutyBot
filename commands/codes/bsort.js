const { SlashCommandBuilder } = require('discord.js')

const bsort = "returning bsort algorithm";

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bsort')
    .setDescription('returns a bsort algorithm!'),
  async execute(interaction) {
    await interaction.reply(`${bsort}`)
  }
}
