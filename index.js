// Import the necessary libraries
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new Discord client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// When the bot is ready, log a message to the console
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages and reply to specific commands
client.on('messageCreate', message => {
  // Ignore messages from the bot itself
  if (message.author.bot) return;

  // Simple command: if the user types '!ping', the bot will respond with 'Pong!'
  if (message.content === '!ping') {
    message.reply('Pong!');
  }

  // Another command: '!hello' responds with 'Hello, World!'
  if (message.content === '!hello') {
    message.reply('Hello, World!');
  }
});

// Log in to Discord using the bot's token from the .env file
client.login(process.env.DISCORD_TOKEN);
