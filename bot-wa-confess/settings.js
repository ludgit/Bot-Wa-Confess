const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6281331720264"]  // Ganti Nomer Owner Di Sini, Ga diganti jg gpp.

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah BOT WhatsApp khusus confess 👋
ketik .confess untuk memulai chat.
`
}
}
