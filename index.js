const Discord = require('discord.js');
const bot = new Discord.Client();

                //token do bot do discord
const token = 'ODQzNTMzMDg1ODMxODU2MTg5.YKFPZw.WfuqPp26MiOAxbNq9e0qCxthnME';

bot.login(token)

//mensagem no console
bot.on('ready',()=>{
    console.log('estou pronto')
})
//mensagens do bot
bot.on('message',msg =>{
    if(msg.content === 'Ola !bot'){
        msg.reply('Olá ! Seja Bem Vindo Ao servidor da nossa Comunidade')
    }
})


bot.on('message',msg =>{
    if(msg.content === 'bom dia !bot'){
        msg.reply('BOM DIA !!!!')
    }
})
bot.on('message',msg =>{
    if(msg.content === 'lixo'){
        msg.reply('OPA ! cuidado com as palavras')
    }
})