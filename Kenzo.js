/*
• Base Ori GhostXmods X WannOFFC
Penting ‼️

Hapus Bagian/Teks Ini? Masuk Neraka Paling Bawah

Script Ini Murni Bikinan Sendiri, Saya Hanya Sekedar Kroco Penghuni Inti Bumi.

Thanks To :                                
- Allah Swt 
- Nabi Muhammad Saw         
- My Parents       
- Ghost [ Develover Sc ]  
- WannOFFC [ Support ]
- GHOST XDZZ [ Record ]
- Pengguna Bot Yang Selalu Support
*/

const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const settings = require('./settings')
const botToken = settings.token;
const owner = settings.adminId;
const adminfile = 'adminID.json';
const premiumUsersFile = 'premiumUsers.json';
const domain = settings.domain;
const plta = settings.plta;
const pltc = settings.pltc;
try {
    premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
}
const bot = new TelegramBot(botToken, { polling: true });
try {
    adminUsers = JSON.parse(fs.readFileSync(adminfile));
} catch (error) {
    console.error('Error reading adminUsers file:', error);
}

const zones = {
    '03f3569e809aa63eb40d842af3ddb523': 'panelprivv.xyz',
    'a476ffcf9243c44a02220f184da527e8': 'mypanell.biz.id',
    '891a2e5d4ac5b3db4fbcef8d9088ad38': 'cpanel-vip.my.id',
    'c2c8ddf4f1bfd0d0c11eb0ed83a634f9': 'r0ulxye4.my.id',
    '7432f024eeeaa0367fd985a18b2729cc': 'lanzpanel.my.id',
    '6c4af9293eed7ea87c94d8effe5f2de2': 'panellprivate.my.id',
    '15b97d8a42af1c00a70070e577ce7301': 'panellstore.site',
    '9b28f4ad0f06b36dd94cc56b01efc19a': 'plerkuda.my.id',
    '2bb49b2de0cbf75c0462ed90d7d333e1': 'cafegt.my.id',
    'd318f96a6327c5340d136415e860f545': 'kangpanel.biz.id',
    '98264c6c53c5bc9080230b077422d748': 'adminpanel.biz.id'
};

const apiTokens = {
    '03f3569e809aa63eb40d842af3ddb523': 'kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo',
    'a476ffcf9243c44a02220f184da527e8': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '891a2e5d4ac5b3db4fbcef8d9088ad38': 'V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2',
    'c2c8ddf4f1bfd0d0c11eb0ed83a634f9': 'RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F',
    '7432f024eeeaa0367fd985a18b2729cc': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '6c4af9293eed7ea87c94d8effe5f2de2': 'fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure',
    '15b97d8a42af1c00a70070e577ce73017': 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ',
    '9b28f4ad0f06b36dd94cc56b01efc19a': 'bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4',
    '2bb49b2de0cbf75c0462ed90d7d333e1': 'lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY',
    'd318f96a6327c5340d136415e860f545': 'RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b',
    '98264c6c53c5bc9080230b077422d748': '1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ',
};

function getRuntime(startTime) {
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);
    return `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}
const nama = './HanzZ-XcV';
const author = 'hann senpaii';
const version = '1.0.0';
// Informasi waktu mulai bot
const startTime = Date.now();
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const startTime = Date.now();
    const menuText = `Halo @${sender} Saya Adalah ${nama} Yang Dapat Membantu Anda Untuk Membuat Panel.

╭─❍ ( Info - Bot )
│ ◦ Nama Bot : @${nama}
│ ◦ Author Bot : @${author}
│ ◦ Version Bot : ${version}
│ ◦ Runtime : ${getRuntime(startTime)}
╰─❍  
    
╭─❍ ( List - Menu )
│ ◦ /cekid
│ ◦ /addowner
│ ◦ /delowner
│ ◦ /addprem
│ ◦ /delprem
│ ◦ /panel
│ ◦ /ramlist
│ ◦ /listusr
│ ◦ /listsrv
│ ◦ /delusr
│ ◦ /delsrv
│ ◦ /addsrv
│ ◦ /listadmin
│ ◦ /createadmin
╰─❍`;
// Event listener for button 'My Profil'
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'myprofil') {
    bot.answerCallbackQuery(callbackQuery.id);
    bot.sendMessage(callbackQuery.from.id, `Hallo, Saya Adalah Bot. Bot Ini Milik @userkyou`);
  }
});
// Event listener for button 'Start'
bot.on('callback_query', (callbackQuery) => {
    if (callbackQuery.data === 'start') {
        const chatId = callbackQuery.message.chat.id;
        const sender = msg.from.username;
        const startTime = Date.now();

        const menuText = `Halo @${sender} Saya Adalah ${nama} Yang Dapat Membantu Anda Untuk Membuat Panel.

╭─❍ ( Info - Bot )
│ ◦ Nama Bot : @${nama}
│ ◦ Author Bot : @${author}
│ ◦ Version Bot : ${version}
│ ◦ Runtime : ${getRuntime(startTime)}
╰─❍  
    
╭─❍ ( List - Menu )
│ ◦ /cekid
│ ◦ /addowner
│ ◦ /delowner
│ ◦ /addprem
│ ◦ /delprem
│ ◦ /panel
│ ◦ /ramlist
│ ◦ /listusr
│ ◦ /listsrv
│ ◦ /delusr
│ ◦ /delsrv
│ ◦ /listadmin
│ ◦ /createadmin
╰─❍`;
 const message = menuText;
 const keyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Ramlist', callback_data: 'ramlist' }, { text: 'My Profil', callback_data: 'myprofil' }],

                ]
            }
        };
        bot.answerCallbackQuery(callbackQuery.id);
        bot.editMessageText(message, {
            chat_id: chatId,
            message_id: callbackQuery.message.message_id,
            reply_markup: keyboard,
            parse_mode: 'Markdown'
        });
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// cekid
bot.onText(/\/cekid/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const id = msg.from.id;
    const owner = '7452374150'; // Ganti dengan ID pemilik bot 
    const text12 = `Hi @${sender} 👋
    
👤 From ${id}
  └🙋🏽 kamu
  
 ID Telegram Anda: ${id}
 Full Name Anda : @${sender}

🙏🏼 Permisi, bot akan pergi secara otomatis.
 Developer : @userkyou`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: 'https://t.me/Testi_Kyouu' }, { text: 'My House', url: 'https://t.me/uahanz' }],
                [{ text: 'ROOM PUBIC', url: 'https://t.me/+QU5D7PXJbeVkNjRl' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//Listdomain
bot.onText(/\/listdomain/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const id = msg.from.id;
    const owner = '7452374150'; // Ganti dengan ID pemilik bot 
    const text12 = `Hi @${sender} 👋
    
┏━━ 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 ━⊜\n ∘ 𝘓𝘢𝘺𝘢𝘯𝘢𝘯 𝘊𝘋𝘕 : 𝘊𝘓𝘖𝘜𝘋𝘍𝘓𝘈𝘙𝘌\n ∘ 𝘛𝘰𝘵𝘢𝘭 𝘋𝘰𝘮𝘢𝘪𝘯 : 11\n ∘ 𝘛𝘰𝘵𝘢𝘭 𝘋𝘰𝘮𝘢𝘪𝘯 On : 11\n┗━━━━━━━━━━━━━━\n ∘ DISARANKAN UNTUK PTERODACLTY 🚨\n┗━━━━━━━━━━━━━━━━━\n\n∘ /1 panelprivv.xyz\n∘ /2 mypanell.biz.id\n∘ /3 cpanel-vip.my.id (khusus cpanel)\n∘ /4 r0ulxye4.my.id\n∘ /5 lanzpanel.my.id \n∘ /6 panellprivate.my.id\n∘ /7 kiospanell.my.id\n∘ /8 plerkuda.my.id\n∘ /9 cafegt.my.id\n∘ /10 kangpanel.biz.id\n∘ /11 adminpanel.biz.id\n∘▬▭▬▭▬▭▬▭▬▭▬▭▬\n NOTE: \n - DILARANG UNTUK DI PAKAI UNTUK WHM/CPANEL\n - DILARANG DDOS SESAMA RESSELER\n - CARA BUAT KETIK CONTOH : /NO SUBDO IP\nCONTOH : /1 xnxx 62.283.272xxx`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: 'https://t.me/HanzZmemek' }, { text: 'My House', url: 'https://t.me/uahanz' }],
                [{ text: 'Group Cyber', url: 'https://t.me/FanatixCyber' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// ramlist
bot.onText(/\/ramlist/, (msg) => {
    const chatId = msg.chat.id;
    const sender = msg.from.username;
    const owner = '7452374150'; // Ganti dengan ID pemilik bot 
    const text12 = `Hi @${sender} 👋
    
▭▬▭( RAM YANG TERSEDIA )▭▬▭
• 1GB ( PREMIUM ) ✅
• 2GB ( PREMIUM ) ✅
• 3GB ( PREMIUM ) ✅
• 4GB ( PREMIUM ) ✅
• 5GB ( PREMIUM ) ✅
• 6GB ( PREMIUM ) ✅
• 7GB ( PREMIUM ) ✅
• 8GB ( PREMIUM ) ✅
• 9GB ( PREMIUM ) ✅
• 10GB ( PREMIUM ) ✅
• 11GB ( PREMIUM ) ✅
• 12GB ( PREMIUM ) ✅
• 13GB ( PREMIUM ) ✅
• 14GB ( PREMIUM ) ✅
• 15GB ( PREMIUM ) ✅
• UNLI ( PREMIUM ) ✅

🛑 JOIN RESELLER PANEL PERMANEN CUMA 10K BANG 😁
Buy Prem? Buy Vps? Buy Reseller Panel & Admin Panel? Partner Panel? Panel 1gb-15gb & unli? Buy Script? Pv (@userkyou)`;
    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Testimoni', url: 'https://t.me/Testi_Kyouu' }, { text: 'My House', url: 'https://t.me/userkyou' }],
                [{ text: 'Room Public', url: 'https://t.me/+QU5D7PXJbeVkNjRl' }]
            ]
        }
    };
    bot.sendPhoto(chatId, settings.pp, { caption: text12, parse_mode: 'Markdown', reply_markup: keyboard });
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// ramlist2
const message = menuText;
const keyboard = {
  reply_markup: {
  inline_keyboard: [
  [{ text: 'Ramlist', callback_data: 'ramlist' }, { text: 'My Profil', callback_data: 'myprofil' }],

            ]
        }
    }; 
    bot.sendMessage(chatId, message, keyboard);
});
bot.on('callback_query', (callbackQuery) => {
  if (callbackQuery.data === 'ramlist') {
    bot.answerCallbackQuery(callbackQuery.id);
    const ramListMessage = "▭▬▭( RAM YANG TERSEDIA )▭▬▭\n• 1GB ( PREMIUM ) ✅\n• 2GB ( PREMIUM ) ✅\n• 3GB ( PREMIUM ) ✅\n• 4GB ( PREMIUM ) ✅\n• 5GB ( PREMIUM ) ✅\n• 6GB ( PREMIUM ) ✅\n• 7GB ( PREMIUM ) ✅\n• 8GB ( PREMIUM ) ✅\n• 9GB ( PREMIUM ) ✅\n• 10GB ( PREMIUM ) ✅\n• UNLI ( PREMIUM ) ✅\n🛑 JOIN RESELLER PANEL PERMANEN CUMA 10K BANG 😁\nBuy Prem? Buy Vps? Buy Reseller Panel & Admin Panel? Partner Panel? Panel 1gb-8gb & unli? Buy Script? Pv (@userkyou)";
    bot.editMessageText(ramListMessage, {
      chat_id: callbackQuery.message.chat.id,
      message_id: callbackQuery.message.message_id,
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Kembali ke Menu Start', callback_data: 'start' }]
        ]
      }
    });
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// addprem
bot.onText(/\/addprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!premiumUsers.includes(userId)) {
            premiumUsers.push(userId);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delprem
bot.onText(/\/delprem (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];  
    if (msg.from.id.toString() === owner) {
        const index = premiumUsers.indexOf(userId);
        if (index !== -1) {
            premiumUsers.splice(index, 1);
            fs.writeFileSync(premiumUsersFile, JSON.stringify(premiumUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from premium users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not a premium user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// addowner
bot.onText(/\/addowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        if (!adminUsers.includes(userId)) {
            adminUsers.push(userId);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `User ${userId} has been added to admin users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is already an admin user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// delowner
bot.onText(/\/delowner (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = match[1];
    
    if (msg.from.id.toString() === owner) {
        const index = adminUsers.indexOf(userId);
        if (index !== -1) {
            adminUsers.splice(index, 1);
            fs.writeFileSync(adminfile, JSON.stringify(adminUsers));
            bot.sendMessage(chatId, `User ${userId} has been removed from admin users.`);
        } else {
            bot.sendMessage(chatId, `User ${userId} is not an admin user.`);
        }
    } else {
        bot.sendMessage(chatId, 'Only the owner can perform this action.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//addsrv
bot.onText(/\/addsrv (.+)/, async (msg, match) => {
const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 7) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /addsrv name,desk,userId,eggId,locationId,memory/disk,cpu');
    return;
  }
const name = t[0];
const desc = t[1] || ''
const usr_id = t[2];
const egg = t[3];
const loc = t[4];
const memo_disk = t[5].split`/`;
const cpu = t[6];
let server;
   try {
let f1 = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
method: 'GET',
headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${plta}`
}
});

let data = await f1.json();

let f = await fetch(`${domain}/api/application/servers`, {
	method: 'POST',
headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${plta}`
},
body: JSON.stringify({
name: name,
description: desc,
user: usr_id,
egg: parseInt(egg),
docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}',
environment: {
INST: "npm",
USER_UPLOAD: "0",
AUTO_UPDATE: "0",
CMD_RUN: "npm start"
},
limits: {
memory: memo_disk[0],
swap: 0,
disk: memo_disk[1],
io: 500,
cpu: cpu
},
feature_limits: {
databases: 5,
backups: 5,
allocations: 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
});
const res = await f.json();
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if ( server ) {
  	bot.sendMessage(chatId, `SUCCESSFULLY ADD SERVER
  
  TYPE: ${res.object}
  
ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
});
//delusr
bot.onText(/\/delusr(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const usr = match[1].trim();

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }

    if (!usr) {
        bot.sendMessage(chatId, 'Mohon masukkan ID server yang ingin dihapus, contoh: /delusr 1234');
        return;
    }

try {
        let f = await fetch(`${domain}/api/application/users/${usr}`, {
	            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            bot.sendMessage(chatId, 'USER NOT FOUND');
        } else {
            bot.sendMessage(chatId, 'SUCCESSFULLY DELETE THE USER');
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan saat menghapus server.');
    }
});
// 1gb
bot.onText(/\/1gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /1gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '1gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '1024';
  const cpu = '30';
  const disk = '1024';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
    
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 2gb
bot.onText(/\/2gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /2gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '2gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '2048';
  const cpu = '60';
  const disk = '2048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}_${u}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 3gb
bot.onText(/\/3gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id)); 
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: '@userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /3gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '3gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '3072';
  const cpu = '90';
  const disk = '3072';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);

    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 4gb
bot.onText(/\/4gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: '@userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /4gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '4gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '4048';
  const cpu = '110';
  const disk = '4048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 5gb
bot.onText(/\/5gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /5gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '5gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '5048';
  const cpu = '140';
  const disk = '5048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 6gb
bot.onText(/\/6gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /6gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '6gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '6048';
  const cpu = '170';
  const disk = '6048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
Jangan Lupa Bilang Done Jika Sudah Di Cek
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 7gb
bot.onText(/\/7gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /7gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '7gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '7048';
  const cpu = '200';
  const disk = '7048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 8gb
bot.onText(/\/8gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /8gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '8gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '8048';
  const cpu = '230';
  const disk = '8048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT NDUT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 9gb
bot.onText(/\/9gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /9gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '9gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '9048';
  const cpu = '260';
  const disk = '9048';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// 10gb
bot.onText(/\/10gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '10000';
  const cpu = '290';
  const disk = '10000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT NDUT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
bot.onText(/\/11gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/kennncxz' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '11000';
  const cpu = '290';
  const disk = '10000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
bot.onText(/\/12gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '12gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '12000';
  const cpu = '290';
  const disk = '11000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
bot.onText(/\/13gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '13000';
  const cpu = '290';
  const disk = '12000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
bot.onText(/\/14gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '14gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '14000';
  const cpu = '290';
  const disk = '11000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
bot.onText(/\/15gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '15gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '15000';
  const cpu = '290';
  const disk = '10000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
// unli
bot.onText(/\/unli (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /unli namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + 'unli';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '0';
  const cpu = '0';
  const disk = '0';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//batas
fs.readFile('adminID.json', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminID = JSON.parse(data);
  }
});
bot.onText(/\/12gb (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const text = match[1];
  const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));  
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const t = text.split(',');
  if (t.length < 2) {
    bot.sendMessage(chatId, 'Invalid format. Usage: /10gb namapanel,idtele');
    return;
  }
  const username = t[0];
  const u = t[1];
  const name = username + '10gb';
  const egg = settings.eggs;
  const loc = settings.loc;
  const memo = '12000';
  const cpu = '290';
  const disk = '11000';
  const spc = 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [[ ! -z ${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall ${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi; /usr/local/bin/${CMD_RUN}';
  const email = `${username}@gmail.com`;
  const akunlo = settings.pp;
  const password = `${username}001`;
  let user;
  let server;
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: username,
        last_name: username,
        language: 'en',
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      if (data.errors[0].meta.rule === 'unique' && data.errors[0].meta.source_field === 'email') {
        bot.sendMessage(chatId, 'Email already exists. Please use a different email.');
      } else {
        bot.sendMessage(chatId, `Error: ${JSON.stringify(data.errors[0], null, 2)}`);
      }
      return;
    }
    user = data.attributes;
    const response2 = await fetch(`${domain}/api/application/servers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        name: name,
        description: '',
        user: user.id,
        egg: parseInt(egg),
        docker_image: 'ghcr.io/parkervcp/yolks:nodejs_18',
        startup: spc,
        environment: {
          INST: 'npm',
          USER_UPLOAD: '0',
          AUTO_UPDATE: '0',
          CMD_RUN: 'npm start'
        },
        limits: {
          memory: memo,
          swap: 0,
          disk: disk,
          io: 500,
          cpu: cpu
        },
        feature_limits: {
          databases: 5,
          backups: 5,
          allocations: 1
        },
        deploy: {
          locations: [parseInt(loc)],
          dedicated_ip: false,
          port_range: []
        }
      })
    });
    const data2 = await response2.json();
    server = data2.attributes;
  } catch (error) {
    bot.sendMessage(chatId, `Error: ${error.message}`);
  }
  if (user && server) {
    bot.sendMessage(chatId, `BERIKUT DATA PANEL ANDA
NAMA: ${username}
EMAIL: ${email}
ID: ${user.id}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`);
    if (akunlo) {
      bot.sendPhoto(u, akunlo, {
        caption: `Hai @${u}

HERE'S YOUR PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${user.username}
🚩 Password : ${password} 
==============================
NOTE : 
 1 NO SEBAR LINK LOG
 2 NO DDOS
 3 GARAN 5h
==============================
THANKS FOR BUYING AT .//userkyou 😁✌️`
        });
      bot.sendMessage(chatId, 'Data panel berhasil dikirim ke ID Telegram yang dimaksud.');
    }
  } else {
    bot.sendMessage(chatId, 'Gagal membuat data panel. Silakan coba lagi.');
  }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// createadmin
bot.onText(/\/createadmin (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const adminUsers = JSON.parse(fs.readFileSync(adminfile));
  const isAdmin = adminUsers.includes(String(msg.from.id));  
  if (!isAdmin) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
  const commandParams = match[1].split(',');
  const panelName = commandParams[0].trim();
  const telegramId = commandParams[1].trim();
  if (commandParams.length < 2) {
    bot.sendMessage(chatId, 'Format Salah! Penggunaan: /createadmin namapanel,idtele');
    return;
  }
  const password = panelName + "117";
  try {
    const response = await fetch(`${domain}/api/application/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${plta}`
      },
      body: JSON.stringify({
        email: `${panelName}@gmail.com`,
        username: panelName,
        first_name: panelName,
        last_name: "Memb",
        language: "en",
        root_admin: true,
        password: password
      })
    });
    const data = await response.json();
    if (data.errors) {
      bot.sendMessage(chatId, JSON.stringify(data.errors[0], null, 2));
      return;
    }
    const user = data.attributes;
    const userInfo = `
TYPE: user
➟ ID: ${user.id}
➟ USERNAME: ${user.username}
➟ EMAIL: ${user.email}
➟ NAME: ${user.first_name} ${user.last_name}
➟ LANGUAGE: ${user.language}
➟ ADMIN: ${user.root_admin}
➟ CREATED AT: ${user.created_at}
➟ LOGIN: ${domain}
    `;
    bot.sendMessage(chatId, userInfo);
    bot.sendMessage(telegramId, `
BRIKUT DETAIL AKUN ADMIN PANEL ANDA

HERE'S YOUR ADMIN PANEL DATA ⤵️
🚩 Login : ${domain}
🚩 Username : ${panelName}
🚩 Password : ${password}
==============================
➡️ Rules : 

• Jangan Curi Sc
• Jangan Buka Panel Orang
• Jangan Ddos Server
• Kalo jualan sensor domainnya
• Jangan Bagi² Panel Free
• Jangan Jualan AdminP Kecuali Pt Gw !!

GRUP ADMIN PANEL
https://t.me/+peqDgzMeLCs5Nzhl

NGEYEL? KICK NO REFF NO DRAMA
Jangan Lupa Bilang Done Jika Sudah Di Cek
==============================
THANKS FOR BUYING AT ./userkyou 😁✌️
    `);
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Terjadi kesalahan dalam pembuatan admin. Silakan coba lagi nanti.');
  }
});
fs.readFile(adminfile, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    adminIDs = JSON.parse(data);
  }
});

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// listsrv
bot.onText(/\/listsrv/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;   
// Check if the user is the Owner
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));   
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }
    let page = 1; // Mengubah penggunaan args[0] yang tidak didefinisikan sebelumnya
    try {
        let f = await fetch(`${domain}/api/application/servers?page=${page}`, { // Menggunakan backticks untuk string literal
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let servers = res.data;
        let messageText = "Daftar server aktif yang dimiliki:\n\n";
        for (let server of servers) {
            let s = server.attributes;

            let f3 = await fetch(`${domain}/api/client/servers/${s.uuid.split('-')[0]}/resources`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${pltc}`
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;

            messageText += `ID Server: ${s.id}\n`;
            messageText += `Nama Server: ${s.name}\n`;
            messageText += `Status: ${status}\n\n`;
        }

        bot.sendMessage(chatId, messageText);
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
//delsrv
bot.onText(/\/delsrv(.*)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const srv = match[1].trim();

    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }

    if (!srv) {
        bot.sendMessage(chatId, 'Mohon masukkan ID server yang ingin dihapus, contoh: /delsrv 1234');
        return;
    }

    try {
        let f = await fetch(`${domain}/api/application/servers/${srv}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });

        let res = f.ok ? { errors: null } : await f.json();

        if (res.errors) {
            bot.sendMessage(chatId, 'SERVER NOT FOUND');
        } else {
            bot.sendMessage(chatId, 'SUCCESSFULLY DELETE THE SERVER');
        }
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan saat menghapus server.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// listusr
bot.onText(/\/listusr/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }
    let page = '1';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut List User Panel :\n\n";
        for (let user of users) {
            let u = user.attributes;
            messageText +=`╔━━━━[ List User Bot ]━`
                messageText += `🆔 ID: ${u.id}`
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'By BOT ./userkyou\n';
                messageText += `╚━━━━━━━━━━━━━━━━━`
            }
            
        messageText += `Page : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total User : ${res.meta.pagination.count}`;
        bot.sendMessage(chatId, messageText);
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// listadmin
bot.onText(/\/listadmin/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));
    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah Hanya Untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }
    let page = '1';
    try {
        let f = await fetch(`${domain}/api/application/users?page=${page}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${plta}`
            }
        });
        let res = await f.json();
        let users = res.data;
        let messageText = "Berikut list admin :\n\n";
        for (let user of users) {
            let u = user.attributes;
            if (u.root_admin) {
                messageText += `🆔 ID: ${u.id} - 🌟 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
                messageText += `${u.username}\n`;
                messageText += `${u.first_name} ${u.last_name}\n\n`;
                messageText += 'By ./userkyou';
            }
        }
        messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
        messageText += `Total Admin: ${res.meta.pagination.count}`;
        const keyboard = [
            [
                { text: 'BACK', callback_data: JSON.stringify({ action: 'back', page: parseInt(res.meta.pagination.current_page) - 1 }) },
                { text: 'NEXT', callback_data: JSON.stringify({ action: 'next', page: parseInt(res.meta.pagination.current_page) + 1 }) }
            ]
        ];
        bot.sendMessage(chatId, messageText, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        console.error(error);
        bot.sendMessage(chatId, 'Terjadi kesalahan dalam memproses permintaan.');
    }
});
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 1
bot.onText(/\/1 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '03f3569e809aa63eb40d842af3ddb523', 'kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 2
bot.onText(/\/2 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, 'a476ffcf9243c44a02220f184da527e8', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain2 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 3
bot.onText(/\/3 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '891a2e5d4ac5b3db4fbcef8d9088ad38', 'V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain3 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 4
bot.onText(/\/4 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, 'c2c8ddf4f1bfd0d0c11eb0ed83a634f9', 'RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain4 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 5
bot.onText(/\/5 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
      const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: 'https://t.me/userkyou' }
                    ]
                ]
            }
        });
        return;
    }
    
    const response = await createSubdomain(subdomain, ip, '7432f024eeeaa0367fd985a18b2729cc', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain5 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 6
bot.onText(/\/6 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
      const adminUsers = JSON.parse(fs.readFileSync(adminfile));
    const isAdmin = adminUsers.includes(String(msg.from.id));

    if (!isAdmin) {
        bot.sendMessage(chatId, 'Perintah hanya untuk Owner, Hubungi Admin Saya Untuk Menjadi Owner atau Users Premium...', {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Hubungi Admin', url: settings.adminUrl }
                    ]
                ]
            }
        });
        return;
    }
    const response = await createSubdomain(subdomain, ip, '6c4af9293eed7ea87c94d8effe5f2de2', 'fxR0JgMIVwd0wvGIeBTymygdSMx1yNAN12lN8ure');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain6 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 7
bot.onText(/\/7 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '15b97d8a42af1c00a70070e577ce7301', 'RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain7 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 8
bot.onText(/\/8 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '9b28f4ad0f06b36dd94cc56b01efc19a', 'bMiZlOhkSzozUq1jMLO5bk4OeZr0GllyVtVWX1F4');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain8 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 9
bot.onText(/\/9 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '2bb49b2de0cbf75c0462ed90d7d333e1', 'lZ0XMXdnwp2L1DsI3f8frkPwvkQ6ENee2PnAfOsY');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain9 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 10
bot.onText(/\/10 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, 'd318f96a6327c5340d136415e860f545', 'RTe9hBdh_-nt0wzOvYN183JyQC011yaiodQ7Po1b');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain10 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰//
// domain 11
bot.onText(/\/11 (.+) (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const subdomain = match[1];
    const ip = match[2];
    const userId = msg.from.id;
    const premiumUsers = JSON.parse(fs.readFileSync(premiumUsersFile));
  const isPremium = premiumUsers.includes(String(msg.from.id));
  if (!isPremium) {
    bot.sendMessage(chatId, 'Perintah Hanya Untuk Users Premium, Hubungi Admin Saya Untuk Menjadi Users Premium...', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'HUBUNGI ADMIN', url: 'https://t.me/userkyou' }
          ]
        ]
      }
    });
    return;
  }
    const response = await createSubdomain(subdomain, ip, '98264c6c53c5bc9080230b077422d748', '1W9IHC9mLAKj8hQaMjczy0gA3Of7kPjJ3gAvTlnZ');
    if (response.success) {
        bot.sendMessage(chatId, response.message);
    } else {
        bot.sendMessage(chatId, 'Failed to create subdomain.');
    }
});


const createSubdomain11 = async (subdomain, ipAddress, zoneId, apiToken) => {
    try {
        const url = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
        const data = {
            type: 'A',
            name: `${subdomain}.${zones[zoneId]}`,
            content: ipAddress,
            ttl: 0,
            proxied: false
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        };

        const response = await axios.post(url, data, { headers: headers });
        return { success: true, message: `Subdomain ${subdomain}.${zones[zoneId]} created successfully with IP ${ipAddress}.` };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Failed to create subdomain.' };
    }
};