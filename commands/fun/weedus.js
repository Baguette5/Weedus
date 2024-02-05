const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weedus')
		.setDescription('Weedus.'),
	async execute(interaction) {
		await interaction.reply('Weedus');
	},
};
