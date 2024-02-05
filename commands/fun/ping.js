const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blunt')
		.setDescription('Rolls one for you.'),
	async execute(interaction) {
		await interaction.reply('<:blunt:1126118635874820096>');
	},
};
