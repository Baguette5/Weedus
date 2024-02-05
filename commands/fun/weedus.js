const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('amigo')
		.setDescription('Rolls one for you.'),
	async execute(interaction) {
		await interaction.reply('hola amigos');
	},
};