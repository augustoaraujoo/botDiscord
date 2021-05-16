# botDiscord
este é um bot simples para o seu servidor do discord 


  Vamos Aprender A criar um bot para seu servidor

 # Aqui Vamos Utilizar As Seguintes Ferramentas 
 *  'Node.js' e um editor de Código 'Visual Studio Code'.
 *  A instalação de ambos é super fácil  
 
 # Primeiros Passos
 * Crie uma pasta na sua Área De Trabalho
 * Abra o Visual Studio Code
 * Basta Arrastar a pasta criada para dentro do Visual Studio Code  
 * abra o terminal Ctrl+
 * em seguida digite dentro do terminal npm init 
 * basta dar ok com a tecla "enter" depois digite "yes" para inicializar
 * Observe que a pasta package.json foi Criada ! 
 * em seguida digite no terminal criado npm install discord.js
 * crie uma "New File" no visual studio com o seguinte nome index.js
 * Crie um servidor no discord em seguida 
 * Abra seu navegador e entre neste link "https://discord.com/developers/applications"
 # Dentro da New File index.js
 * VAMOS construir nosso bot 
 * const Discord = require('discord.js');
 * const bot = new Discord.Client();
 * const token = dentro das aspas 'coloque seu token';
 * bot.login(token) "aqui não você não irá digitar o token do bot" apenas token
 * bot.on('ready',()=>{console.log('estou pronto')})
 * bot.on('message',msg =>{ if(msg.content === 'Ola !bot'){msg.reply('Olá ! Seja Bem Vindo Ao servidor da nossa Comunidade')}})
 * para ativar basta digitar node . no terminal 

  <img src="https://s2.glbimg.com/CE_IbnmTLLvKBnCOHe9jK2NsOvA=/0x0:695x340/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/q/L/jAcpGdTeOPloAbXIIgyQ/discordbot.jpg" width = "600">
  
  clique em "New Application"
  
  depois basta criar um nome para seu bot
  

  
  <img src = "https://s2.glbimg.com/PfmjwS2OhmcSRB2Kulhv7u_xbsc=/0x0:695x337/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/m/i/I42cHzSsAFlN8ryZEAPA/discordbot1.jpg" width = "600">
  
  em seguida observe em na esquerda "SETTINGS" e entre em "bot"  para pegarmos o token do seu bot más CUIDADO!! este token você NÃO deve compartilhar com ninguém,    apenas copie o token logo iremos utilizalo.
  
  e de apermissões para seu bot 
  

 # Permissões Do Bot API
  * https://discordapi.com/permissions.html entre neste link e coloque a permissão do bot e seu "id" que está em "General Information"
  *  cole o id em "Client ID"
  *  clique no último link abaixo 
  *  e adicione o bot no seu servidor 
  

