const Discord = require('discord.js');
const client = new Discord.Client();

// Efetua o login no Discord
client.on('ready', () => {
	console.log('Ready!');
});

client.login('NDY4MDQ1NTI0NjI1NTIyNjg4.DizdDQ.LuzXN7zKUFNB60wRnaTvd429vkE');

client.on('message', message => {
	if (message.content === '!ping') {
		// Envia "Pong." no canal onde a mensagem foi enviada
		message.channel.send('Pong.');
	}
});