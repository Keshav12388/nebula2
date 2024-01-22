const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js")

module.exports = {
  name: `help`,
  aliases: ['h'],
  punitop: false,
  adminPermit: false,
  ownerPermit: false,
  cat: 'info',
  run: async (client, message, args, prefix) => {
    let em = new MessageEmbed().setColor(`#2f3136`).setAuthor({ name: `${client.user.username} Help Panel`, iconURL: client.user.displayAvatarURL() }).setDescription('<:nxt_black_hearts:1181070327997005914> Hey I Am **Ghoul**\nA Powerful Multipurpose Bot With Premium Features I Can Save Your Server Getting Nuke/Wizz\n\n <a:Dot:1187337057979351162>  __**Categories**__ \n\n<:security:1187381255596146740>  : Security \n <:Moderation:1187340535183184022>  : Moderation \n <:icons_info:1187340709527826452>  : Information \n <:Utility:1187340754213945424>  : Utility\n                                                                      <:EmployeeVerified:1187382531864137749> : [Get Ghoul](https://discord.com/api/oauth2/authorize?client_id=1133347034053759088&permissions=8&scope=bot) | [Support Server](https://discord.gg/cjontop)'
    ).setThumbnail(message.author.displayAvatarURL({ dynamic: true })).setFooter({ text: `Made by Keshav`, iconURL: message.guild.iconURL({ dynamic: true }) });

    let r1 = new MessageActionRow().addComponents(
      new MessageSelectMenu().setCustomId(`he`).setPlaceholder(`Choose A Categories`).addOptions([
        {
          label: `Home`,
          emoji: `<:_home:1133395291836522676>`,
          value: `h1`,
          description: `Takes you to the main page`
        },
        {
          label: `Security`,
          emoji: `<:_verified:1133394830551154699>`,
          value: `h2`,
          description: `Shows Antinuke and Security Commands`
        },
        {
          label: `Moderation`,
          emoji: `<:_sentry:1133394982959591485>`,
          value: `h3`,
          description: `Shows the Administrator Commands`
        },
        {
          label: `Information`,
          emoji: `<:Jarvis_info:1132644046859419770>`,
          value: `h5`,
          description: `Shows the bot Information Commands`
        },
        {
          label: `Utility`,
          emoji: `<:_utils:1133396667115249844>`,
          value: `h6`,
          description: `Shows the utility commands`
        },
        {
          label: `Owner`,
          emoji: `<:_owner:1133395069790060647>`,
          value: `h7`,
          description: `Shows the Bot Owner Commands`
        }
      ])
    );

    let r2 = new MessageActionRow().addComponents(
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol3`).setEmoji(`<:_home:1133395291836522676>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol4`).setEmoji(`<:zardex_delete:1133413126965055538>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`lol5`).setLabel(`All Commands`).setEmoji(`<:zardex_logs:1133413155167539312>`)
    );

    let msg = await message.channel.send({ embeds: [em], components: [r2, r1] });
    let page = 0;

    let embed1 = new MessageEmbed().setColor(`#2f3136`).addFields({ name: `Security Commands`, value: `${client.commands.filter(x => x.cat && x.cat === `security`).map(x => `\`${x.name}\``).sort().join(', ')}` }).setAuthor({ name: `| Security Commands`, iconURL: client.user.displayAvatarURL() })
    let embed2 = new MessageEmbed().setColor(`#2f3136`).addFields({ name: `Moderation Commands`, value: `${client.commands.filter(x => x.cat && x.cat === `admin`).map(x => `\`${x.name}\``).sort().join(', ')}` }).setAuthor({ name: `| Moderation Commands`, iconURL: client.user.displayAvatarURL() })
    let embed3 = new MessageEmbed().setColor(`#2f3136`).addFields({ name: `Information Commands`, value: `${client.commands.filter(x => x.cat && x.cat === `info`).map(x => `\`${x.name}\``).sort().join(', ')}` }).setAuthor({ name: `| Information Commands`, iconURL: client.user.displayAvatarURL() })
    let embed4 = new MessageEmbed().setColor(`#2f3136`).addFields({ name: `Utility Commands`, value: `${client.commands.filter(x => x.cat && x.cat === `util`).map(x => `\`${x.name}\``).sort().join(', ')}` }).setAuthor({ name: `| Utility Commands`, iconURL: client.user.displayAvatarURL() })
    let embed5 = new MessageEmbed().setColor(`#2f3136`).addFields({ name: `Owner Commands`, value: `${client.commands.filter(x => x.cat && x.cat === `punit`).map(x => `\`${x.name}\``).sort().join(', ')}` }).setAuthor({ name: `| Owner Commands`, iconURL: client.user.displayAvatarURL() })
    var embeds = [];
    embeds.push(embed1); embeds.push(embed2); embeds.push(embed3); embeds.push(embed4); embeds.push(embed5);

    const collector = await msg.createMessageComponentCollector({
      filter: (interaction) => {
        if (message.author.id === interaction.user.id) return true;
        else {
          interaction.reply({ content: `${client.emoji.cross} | That's not your session run : \`${prefix}help\` to create your own.`, ephemeral: true })
        }
      },
      time: 120000,
      idle: 120000 / 1
    });

    collector.on('collect', async (interaction) => {
      if (interaction.isSelectMenu()) {
        for (const value of interaction.values) {
          if (value === `h1`) {
            let em = new MessageEmbed().setColor(`#2f3136`).setAuthor({ name: `${client.user.username} Help Panel`, iconURL: client.user.displayAvatarURL() }).setDescription('**Hey I am Jarvis\nA moderation bot with best Antinuke\n\n Top Command | ?Antinuke\n\n<:zardex_logs:1133413155167539312> __**Categories**__ \n\n<:_verified:1133394830551154699> : Security \n <:_sentry:1133394982959591485> : Moderation \n <:_info:1133395045161107527> : Information \n <:_utils:1133396667115249844> : Utility \n <:_owner:1133395069790060647> : Owner').setThumbnail(interaction.user.displayAvatarURL({ dynamic: true })).setFooter({ text: `Just A Powerful Discord bot`, iconURL: interaction.guild.iconURL({ dynamic: true }) });
            return interaction.update({ embeds: [em] });
          }
          if (value === `h2`) {
            return interaction.update({ embeds: [embed1] });
          }
          if (value === `h3`) {
            return interaction.update({ embeds: [embed2] });
          }
          if (value === `h5`) {
            return interaction.update({ embeds: [embed3] });
          }
          if (value === `h6`) {
            return interaction.update({ embeds: [embed4] });
          }
          if (value === `h7`) {
            return interaction.update({ embeds: [embed5] });
          }
        }
      }
      if (interaction.isButton()) {
        if (interaction.customId === `lol3`) {
          return interaction.update({ embeds: [em] })
        }
        if (interaction.customId === `lol4`) {
          await interaction.message.delete();
        }
        if (interaction.customId === `lol5`) {
          page = page > 0 ? --page : embeds.length - 1;
          page = page > 0 ? --page : embeds.length - 1;
          return interaction.update({ embeds: [embeds[page]] })
        }
      }
    });
    collector.on('end', async () => {
      msg.edit({ embeds: [em], components: [], content: `${client.emoji.info} | Help Timed Out Kiddo <$` })
    });
  }
}