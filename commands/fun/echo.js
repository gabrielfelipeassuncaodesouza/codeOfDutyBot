const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!'),
   
  async execute(interation) {
    await interation.reply(`You typed echo!`);
  }
}
