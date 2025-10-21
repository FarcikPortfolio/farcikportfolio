const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} je online!`);
  client.user.setActivity("editorfarcik.eu 💻", { type: 3 });
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  const text = msg.content.toLowerCase();

  if (text === "!ping") msg.reply("🏓 Pong!");
  if (text === "!ahoj") msg.reply("Nazdar, tady Editor Farcik 👋");
});

client.login(process.env.TOKEN);
