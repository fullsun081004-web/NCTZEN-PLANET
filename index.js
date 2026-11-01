const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const P = require('pino')
const WELCOME = `𖤐⭒๋࣭ ⭑welcome, new member 
before joining the fun, jangan lupa intro dulu yaaa, cutie/ganteng 
ദ്ദി(˶ᵔ ᵕ ᵔ˶) ♡ and don't forget to read our GC rules first,📜

˖ ݁𖥔 ݁˖----------------------🪐----------------- ˖ ݁𖥔 ݁˖
˖ ݁𖥔 ݁˖🩰  name  :
˖ ݁𖥔 ݁˖🧁  line :
˖ ݁𖥔 ݁˖🎀  ce / co :
˖ ݁𖥔 ݁˖🫧  bias :
˖ ݁𖥔 ݁˖💌  NCTzen since :
˖ ݁𖥔 ݁˖🎧  fav NCT song :
˖ ݁𖥔 ݁˖🍓  fav NCT unit :
˖ ݁𖥔 ݁˖🪞  dapat link GC dari mana : 
˖ ݁𖥔 ݁˖---------------------- 🪐-----------------˖ ݁𖥔 ݁˖
꒰ঌ˖ ݁𖥔 ݁your planet keepers  ˖ ݁𖥔 ݁˖໒꒱
𐚁๋࣭⭑ֶָ֢Sunny 07L minhyung wife
𐚁๋࣭⭑ֶָ֢Puput 04L donghyuck wife
𐚁๋࣭⭑ֶָ֢Aleesya 12L jaemin wife
𓂃 ࣪˖ ⋆.˚ ʚїɞ ⋆ hope you find good friends and lovely memories in our little planet 🪐🤗
feel free to invite your fellow NCTzens too 💚
🔗 https://chat.whatsapp.com/HcYfVZab4H20DiaKFl79gH`;
async function startBot(){
  const { state, saveCreds } = await useMultiFileAuthState('auth')
  const sock = makeWASocket({auth: state, logger: P({level:'silent'}), printQRInTerminal:true})
  sock.ev.on('creds.update', saveCreds)
  sock.ev.on('group-participants.update', async (a)=>{
    if(a.action==='add'){
      for(let m of a.participants){
        await sock.sendMessage(a.id,{text:WELCOME, mentions:[m]})
      }
    }
  })
}
startBot()
