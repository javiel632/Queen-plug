const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],use: '.menu',
    desc: "menu the bot",
    category: "menu",
    react: "🥵",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭══〘〘 ${config.BOT_NAME} 〙〙*
*┃❍* *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
*┃❍* *ᴍᴏᴅᴇ* : *${config.MODE}*
*┃❍* *ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃❍* *ʀᴀᴍ ᴜsᴇ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)},GB / ${Math.round(require('os').totalmem / 1024 / 1024)},GB
*┃❍* *ᴅᴇᴠ* : *𝑱𝑨𝑽𝑰𝑬𝑳*
*┃❍* *ᴠᴇʀsɪᴏɴs* : *1.0.0*
*╰════════════════⊷*
*╭────❒⁠⁠⁠⁠* *DOWNLOAD-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ғʙ*
*├⬡* *.ɪɴꜱᴛᴀ*
*├⬡* *.ᴠɪᴅᴇᴏ*
*├⬡* *.ɢᴅʀɪᴠᴇ*
*├⬡* *.ᴛᴡɪᴛᴛᴇʀ*
*├⬡* *.ᴛᴛ*
*├⬡* *.ᴍᴇᴅɪᴀғɪʀᴇ*
*├⬡* *.ᴘʟᴀʏ*
*├⬡* *.sᴏɴɢ*
*├⬡* *.ᴠɪᴅᴇᴏ*
*├⬡* *.sᴘᴏᴛɪꜰʏ*
*├⬡* *.ᴠɪᴅᴇᴏ4*
*├⬡* *.ɪᴍɢ*
*├⬡* *.Lʏʀɪᴄs*
*├⬡* *.ᴀᴘᴋ*
*├⬡* *.ʙᴀɪsᴄᴏᴘᴇ*
*├⬡* *.ɢɪɴɪsɪsɪʟᴀ*
*┕──────────────❒*
*╭────❒⁠⁠*⁠⁠ *SEARCH-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ʏᴛꜱ*
*├⬡* *.ʏᴛᴀ*
*├⬡* *.ᴍᴏᴠɪᴇ*
*├⬡* *.Gᴏᴏɢʟᴇ*
*├⬡* *.ᴡᴇᴀᴛʜᴇʀ*
*├⬡* *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────❒*
*╭────❒⁠⁠*⁠⁠ *LOGO-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.3ᴅᴄᴏᴍɪᴄ*
*├⬡* *.ᴅʀᴀɢᴏɴʙᴀʟʟ*
*├⬡* *.ᴅᴇᴀᴅᴘᴏᴏʟ*
*├⬡* *.ʙʟᴀᴄᴋᴘɪɴᴋ*
*├⬡* *.ɴᴇᴏɴʟɪɢʜᴛ*
*├⬡* *.ᴄᴀᴛ*
*├⬡* *.sᴀᴅɢɪʀʟ*
*├⬡* *.ᴘᴏʀɴʜᴜʙ*
*├⬡* *.ɴᴀʀᴜᴛᴏ*
*├⬡* *.ᴛʜᴏʀ*
*├⬡* *.ᴀᴍᴇʀɪᴄᴀ*
*├⬡* *.ᴇʀᴀsᴇʀ*
*├⬡* *.3ᴅᴘᴀᴘᴇʀ*
*├⬡* *.ғᴜᴛᴜʀɪsᴛɪᴄ*
*├⬡* *.ᴄʟᴏᴜᴅs*
*├⬡* *.sᴀɴs*
*├⬡* *.ɢᴀʟᴀxʏ*
*├⬡* *.ʟᴇᴀғ*
*├⬡* *.sᴜɴsᴇᴛ*
*├⬡* *.ɴɪɢᴇʀɪᴀ*
*├⬡* *.ᴅᴇᴠɪʟᴡɪɴɢs*
*├⬡* *.ʜᴀᴄᴋᴇʀ*
*├⬡* *.ʙᴏᴏᴍ*
*├⬡* *.ʟᴜxᴜʀʏ*
*├⬡* *.ᴢᴏᴅɪᴀᴄ*
*├⬡* *.ᴀɴɢᴇʟᴡɪɴɢs*
*├⬡* *.ʙᴜʟʙ*
*├⬡* *.ᴛᴀᴛᴏᴏ*
*├⬡* *.ᴄᴀsᴛʟᴇ*
*├⬡* *.ғʀᴏᴢᴇɴ*
*├⬡* *.ᴘᴀɪɴᴛ*
*├⬡* *.ʙɪʀᴛʜᴅᴀʏ*
*├⬡* *.ᴛʏᴘᴏɢʀᴀᴘʜʏ*
*├⬡* *.ʙᴇᴀʀ*
*├⬡* *.ᴠᴀʟᴏʀᴀɴᴛ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *AI-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ɢᴘᴛ*
*├⬡* *.ᴀɪ*
*├⬡* *.ɪᴍᴀɢɪɴᴇ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *OWNER-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├⬡* *.sᴇᴛᴛɪɴɢs*
*├⬡* *.ᴏᴡɴᴇʀ*
*├⬡* *.ʀᴇᴘᴏ*
*├⬡* *.ꜱʏꜱᴛᴇᴍ*
*├⬡* *.ꜱᴛᴀᴛᴜꜱ*
*├⬡* *.Aʙᴏᴜᴛ*
*├⬡* *.ʙʟᴏᴄᴋ*
*├⬡* *.ᴜɴʙʟᴏᴄᴋ*
*├⬡* *.sʜᴜᴛᴅᴏᴡɴ*
*├⬡* *.ʙʀᴏᴀᴅᴄᴀsᴛ*
*├⬡* *.ᴊɪᴅ*
*├⬡* *.ɢᴊɪᴅ*
*├⬡* *.ᴘᴀɪʀ*
*├⬡* *.sᴀᴠᴇ*
*├⬡* *.ʀᴇꜱᴛᴀʀᴛ*
*┕───────────────❒*
*╭────❒⁠⁠⁠⁠* *GROUP-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ʀᴇᴍᴏᴠᴇ*
*├⬡* *.ᴅᴇʟ*
*├⬡* *.ᴀᴅᴅ*
*├⬡* *.ᴋɪᴄᴋ*
*├⬡* *.ᴋɪᴄᴋᴀʟʟ*
*├⬡* *.ᴘʀᴏᴍᴏᴛᴇ*
*├⬡* *.ᴅᴇᴍᴏᴛᴇ*
*├⬡* *.ᴛᴀɢᴀʟʟ*
*├⬡* *.ɪɴᴠɪᴛᴇ*
*├⬡* *.ʀᴇᴠᴏᴋᴇ*
*├⬡* *.ᴘᴏʟʟ*
*├⬡* *.ʀᴀɴᴅᴏᴍsʜɪᴘ*
*├⬡* *.ɴᴇᴡɢᴄ*
*├⬡* *.ᴍᴜᴛᴇ*
*├⬡* *.ᴜɴᴍᴜᴛᴇ*
*├⬡* *.ʟᴏᴄᴋɢᴄ*
*├⬡* *.ᴜɴʟᴏᴄᴋɢᴄ*
*├⬡* *.ʟᴇᴀᴠᴇ*
*├⬡* *.ɢɴᴀᴍᴇ*
*├⬡* *.ɢᴅᴇsᴄ*
*├⬡* *.ᴊᴏɪɴ*
*├⬡* *.ʜɪᴅᴇᴛᴀɢ*
*├⬡* *.ɢɪɴғᴏ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *INFO-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ᴀʙᴏᴜᴛ*
*├⬡* *.ᴀʟɪᴠᴇ*
*├⬡* *.ʀᴇǫᴜᴇsᴛ*
*├⬡* *.ʙᴏᴛɪɴꜰᴏ*
*├⬡* *.ꜱᴛᴀᴛᴜꜱ*
*├⬡* *.ᴘɪɴɢ*
*├⬡* *.ꜱʏꜱᴛᴇᴍ*
*├⬡* *.ᴜᴘᴛɪᴍᴇ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *BOT-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ʀᴇᴘᴏ*
*├⬡* *.ᴍᴇɴᴜ*
*├⬡* *.ᴜᴘᴅᴀᴛᴇ*
*├⬡* *.ᴍᴏᴅᴇ*
*├⬡* *.ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├⬡* *.ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
*├⬡* *.ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
*├⬡* *.ᴀᴜᴛᴏʀᴇᴀᴅsᴛᴀᴛᴜs*
*├⬡* *.ᴀɴᴛɪʙᴀᴅ*
*├⬡* *.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
*├⬡* *.ᴀᴜᴛᴏʀᴇᴘʟʏ*
*├⬡* *.ᴀᴜᴛᴏʀᴇᴀᴄᴛ*
*├⬡* *.ᴀɴᴛɪʟɪɴᴋ*
*├⬡* *.ᴀᴜᴛᴏʀᴇᴀᴅ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *CONVERTER-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.sᴛɪᴄᴋᴇʀ*
*├⬡* *.ᴛᴀᴋᴇ*
*├⬡* *.ᴛʀᴛ*
*├⬡* *.ᴛᴛs*
*├⬡* *.ꜰᴀɴᴄʏ*
*├⬡* *.ᴜʀʟ*
*├⬡* *.Aɢᴇ*
*├⬡* *.Cᴏɴᴠᴇʀᴛ*
*├⬡* *.ᴛɪɴʏ*
*├⬡* *.ᴍᴏᴠɪᴇ*
*┕─────────────❒*
*╭────❒⁠⁠⁠⁠* *RANDOM-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ᴀɴɪᴍᴇ*
*├⬡* *.ᴄᴏᴜᴘʟᴇᴘᴘ*
*├⬡* *.ʟᴏʟɪ*
*├⬡* *.ᴡᴀɪꜰᴜ*
*├⬡* *.ᴄᴏsᴘʟᴀʏ*
*├⬡* *.ɴᴇᴋᴏ*
*├⬡* *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *WALLPAPERS-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ɪᴍɢ*
*├⬡* *.ʟᴏɢᴏ*
*├⬡* *.ss*
*┕──────────────❒*
*╭────❒⁠⁠⁠⁠* *OTHER-CMD* *❒⁠⁠⁠⁠* 
*├⬡* *.ᴛʀᴛ*
*├⬡* *.ᴊᴏᴋᴇ*
*├⬡* *.ꜰᴀᴄᴛ*
*├⬡* *.ɢɪᴛʜᴜʙ*
*├⬡* *.ɢᴘᴀꜱꜱ*
*├⬡* *.ʜᴀᴄᴋ*
*├⬡* *.vv*
*├⬡* *.vv2*
*├⬡* *.sᴘᴀᴍ*
*├⬡* *.ᴠᴄᴀʀᴅ*
*├⬡* *.ꜱʀᴇᴘᴏ*
*├⬡* *.sʏsᴛᴇᴍ*
*├⬡* *.ʀᴀɴᴋ*
*├⬡* *.Tɪᴍᴇᴢᴏɴᴇ*
*├⬡* *.ᴅᴇꜰɪɴᴇ*
*├⬡* *.Dᴀɪʟʏꜰᴀᴄᴛ*
*┕─────────────❒*
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ-ᴍᴅ`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/Kxyz8GpD/images-55.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363290715861418@newsletter',
                        newsletterName: 'ǫᴜᴇᴇɴ ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/kxdej4.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
