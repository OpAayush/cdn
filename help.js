const { EmbedBuilder, ApplicationCommandType } = require('discord.js')

module.exports = {
	name: 'help',
	description: "Shows you the list of commands!",
  usage: "",
  category: "info",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
	type: ApplicationCommandType.ChatInput,
  	run: async (client, interaction) => {
      
       const embed = new EmbedBuilder()
            .setTitle('Upt1mer Commands')
            .setColor(000000)
            .setDescription("**DM MODE UNDER MAINTENANCE!!**")
            .addFields([
                {
                    name: `/uptime add `,
                    value: `Adds monitor to your project.`,
                    inline: true
                },
                {
                    name: `/uptime remove`,
                    value: `Remove monitor from your projects.`,
                    inline: true
                },
                {
                    name: `/uptime total`,
                    value: `Show all projects.`,
                    inline: true
                },
                {
                    name: `/invite`,
                    value: `Get the bot's invite link.`,
                    inline: true
                },
                  {
                    name: `/ping`,
                    value: `Check bot's ping.`,
                    inline: true
                },
                  {
                    name: `/stats`,
                    value: `show the current statistics of the bot.`,
                    inline: true
                },
     {
                    name: `/together`,
                    value: `Watch youtube videos together!`,
                    inline: true
                },
     {
                    name: `/first-message`,
                    value: `Get the First Message in a Channel.`,
                    inline: true
                },
     {
                    name: `/meme`,
                    value: `sends an epic meme`,
                    inline: true
                },
     {
                    name: `/role add`,
                    value: `Manage roles of the server or members.`,
                    inline: true
                }        
            ])

      .setFooter({ text: 'Made with ❤️ by Aayu5h#1737'});

            await interaction.reply({
                embeds: [embed]
            });
    }
};
