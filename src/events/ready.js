module.exports = async (client) => {
  client.on("ready", async () => {
    console.log(`${client.user.tag} Has Logged In!\n Hey\n Fastest Antinuke!!.`)
    client.user.setPresence({
      activities: [{
        name: `${client.config.prefix}Help | ${client.config.prefix}Antinuke`,
        type: "LISTENING"
      }],
      status: "online"
    });
  });
};