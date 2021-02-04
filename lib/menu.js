exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, ${id.split("@s.whatsapp.net")[0]} 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
=> *1.PEMBUAT STICKER*
_${BotName} enviará seu stick com uma legenda #sticker!_
Perintah: #sticker
Contoh: enviar fotos com legendas #sticker

=> *2.NULIS OTOMATIS*
_${BotName} irá enviar a palavra em um caderno de acordo com o que você enviou!_
Perintah: #nulis [kata]
Contoh: #nulis Author ganteng Tq:v

=> *3.FITUR PANTUN*
_${BotName} vai enviar uma rima aleatória!_
Perintah: #pantun
Contoh: #pantun

=> *4.DOWNLOADER YOUTUBE*
_${BotName} irá enviar o downloader de vídeo de yt de acordo com seus pedidos!_
Perintah: #yt [link]
Contoh: #yt https://youtu.be/blablabla

=> *5.FITUR QUOTES*
_${BotName} irá enviar uma palavra aleatória de sabedoria!_
Perintah: #quotes
Contoh: #quotes

=> *6.GACHA*
_${BotName} irá enviar a imagem de uma garota de acordo com o que você enviou!_
Perintah: #gacha [cewek/cowok]
Contoh: #gacha cewek

=> *7.FITUR ANIME*
_${BotName} irá enviar fotos de anime aleatoriamente!_
Perintah: #randomanime
Contoh: #randomanime

=> *8.PENGUBAH SOM DO GOOGLE*
_${BotName} irá enviar a voz vn do google de acordo com o comando que você enviar! _
Perintah: #ttsid [kata]
Contoh: #ttsid Author ganteng

=> *9.FITUR QURAN*
_${BotName} enviará versículos do Alcorão ("sla oq tem issokkkjk bot mem é meu") aleatórios! _
Perintah: #quran
Contoh: #quran

=> *10.INFORMASI BOT*
_${BotName} irá enviar informações sobre o bot! _
Perintah: #info
Contoh: #info

=> *11.FITUR SAY*
_${BotName} irá enviar as palavras de acordo com o que você enviar! _
Perintah: #say [kata]
Contoh: #say halo Author ganteng

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} irá enviar a música de acordo com o pedido que você enviou! _
Perintah: #ytmp3 [link]
Contoh: #ytmp3 https://youtu.be/xxxx

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} irá enviar vídeo / foto ig de acordo com o pedido que você enviar! _
Perintah: #ig [link]
Contoh: #ig https://instagram.com/xxxx

=> *14.FACEBOOK VIDEO/FOTO DOWNLOADER*
_${BotName} enviaremos o vídeo / foto fb de acordo com o pedido que você enviar! _
Perintah: #fb [link]
Contoh: #fb https://facebook.com/xxxx

=> *15.TWITTER VIDEO/FOTO DOWNLOADER*
_${BotName} irá enviar um vídeo / foto do twitter de acordo com o pedido que você enviar! _
Perintah: #twt [link]
Contoh: #twt https://twitter.com/xxxx

=> *16.WIKIPEDIA*
_${BotName} irá enviar os resultados da wikipedia de acordo com o comando que você enviar! _
Perintah: #wiki [query]
Contoh: #wiki anjing




📺 * Publicidade *:

✅ Siga a conta do instagram do admin $ {instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES DO COVID-19!

⚠️ POSITIVO: * $ {corohelp.confirmed.value} *
⚠️ HEAL: * $ {corohelp.recovered.value} *
⚠️ MORREU: * $ {corohelp.deaths.value} *
⚠️ ATUALIZAÇÃO: * $ {corohelp.lastUpdate} *

♻️ _ MANTENHA SAUDÁVEL E USE SEMPRE MÁSCARA! _

♻️ Quer anunciar no * $ {BotName}? *
☎️ WA: * $ {whatsapplu} *
  
⚠️ Use-o com sabedoria‼ ️
⚠️ Este bot executa $ {quando o bot está ativo}‼ ️

✅ Grub oficial [1]: $ {grupch1}

✅ Grub oficial [2]: $ {grupch2}

  
🔰 ----- [* POWERED BY $ {BotName} *] ----- 🔰`
}