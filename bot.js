const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const request = require('request');

client.on('ready', () => {
    console.log('Logged in as Bippabot');
});

client.on('message', msg =>{
    if(msg.content === 'i+'){
        request('http://inspirobot.me/api?generate=true', function(error, response, body) {
            msg.channel.send(body);//Regular Themed Quotes
          });
    } else if(msg.content === 'ix+'){
        request('http://inspirobot.me/api?generate=true&season=xmas', function(error, response, body) {
            msg.channel.send(body);//Xmas Themed Quotes
        });
    }
});