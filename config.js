const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="venchfitness@gmail.com"
global.location="Tanzania"


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255767886564";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_39_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNta2JHT00vTDF4SU42bGpydVdOTVN6MEppVDdtVWJVeUJ0ZEJMRi9sUjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBpNzRVWWQ1U1JlX1FxU1czVFVseEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQ2ZmUyMzUtODliYy00NzYwLWE4ZDEtNjZkM2NhMDAxNzZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDIwLFxuICAgICAgMTAzLFxuICAgICAgOTQsXG4gICAgICAxOSxcbiAgICAgIDE3MixcbiAgICAgIDIyMyxcbiAgICAgIDU0LFxuICAgICAgMjQyLFxuICAgICAgMTg3LFxuICAgICAgMTcsXG4gICAgICAyMTQsXG4gICAgICA1MCxcbiAgICAgIDEyNyxcbiAgICAgIDEzNixcbiAgICAgIDI0MCxcbiAgICAgIDQwLFxuICAgICAgOTEsXG4gICAgICAxMDcsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDQ4LFxuICAgICAgOTAsXG4gICAgICAxNDEsXG4gICAgICAxMTIsXG4gICAgICAzOCxcbiAgICAgIDIxMSxcbiAgICAgIDIxNSxcbiAgICAgIDEzLFxuICAgICAgNzYsXG4gICAgICAxNjYsXG4gICAgICA2MCxcbiAgICAgIDIzMixcbiAgICAgIDE4NCxcbiAgICAgIDE0NSxcbiAgICAgIDc1LFxuICAgICAgMjUsXG4gICAgICAxMzIsXG4gICAgICAyMDYsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plRCtiNElFS3E1MXNJR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMHpGTUpFNFhXU3RuYnhZY0hvWktoTHlvNnNReUhRK21RQmQxZlcxTjNDOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0YzFqT2NDTVBkS3pISVgrcG5kR1VaUlV0NDkyTzhMYzk2cU0vVmJFOHhiME1FUDNpNVd0UkU5blR0SVhJLzdOdzFENE9ZcUp6YW5qTGw3VDRDQndCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVcUZSTGRBM2MxZzRpdVl1NGxlaXk0ZlBtWUlhVWhxT0l0UVZoaVhqYy8vSE9nYlg4TDNrYWpiM01mNnhEZjVkN0taNENWNEFERXRMNEt1b2VSTzNCdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc2Nzg4NjU2NDoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTYxMzk3MDIwOTU5NjY6MTJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3Njc4ODY1NjQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MDQ0MTEzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtKYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0paLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU13WjJxd2FLdVlkZEhSdmwvS2VSTlVETTBPVlVyWXo3cDlzNkhSVG1vcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDE5OTM0MTU0NjVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSmEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0allMazYyaEdRR1VmSGZhWWN3S1pzR0k5MldjWDZYY1NiNWVKcWRjRWtnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNzk0ODk5NDMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDYwNTk2MjE0OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtKYi5qc29uIjogIntcImtleURhdGFcIjpcIjE0K0JDN3ErYVZYb1RDWXQ0M0lWRmdUREhud1U3V2JMZ005NkFHbFQ4L2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI3OTQ4OTk0MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDcxOTkyMzU5MjhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSmMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiZlk3NkxFeEE2TWIwWmhESnp3ZmMvaWhka3QwQzlRUk1DcFdGSVBidHprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNzk0ODk5NDMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlsyLDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzQ5NzkxNDE4MTk5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0plLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNG95SzdaSFFRa2o1VzM1aS9CaEtENVdBeUxSOWZCTXR5Z21Bc1U0RllZRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjc5NDg5OTQzLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDQzODAzMzM3NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
