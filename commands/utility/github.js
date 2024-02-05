const {ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder,EmbedBuilder} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
		.setName('github')
		.setDescription('Sends the GitHub repo link.'),
    async execute(interaction){
        

        const github = new ButtonBuilder()
         .setLabel('GitHub Repo')
         .setURL('https://github.com/Baguette5/Weedus')
         .setStyle(ButtonStyle.Link)
         const row = new ActionRowBuilder()
          .addComponents(github);
        
        
        
        const gitembed = new EmbedBuilder()
          .setColor(0x02B818)
          .setTitle("Here's GitHub repository")
          .setAuthor({ name: 'Weedus', iconURL: 'https://cdn.discordapp.com/attachments/519977977849708544/720626607257288814/dankshrek.png?ex=65ce0dd3&is=65bb98d3&hm=74a9a1ea7204a0b1004c2a1d0b017f4406f37833639dc0a2b2ad810b2fd33efd&'})

          await interaction.reply({embeds: [gitembed],components: [row]});
    }
  }