const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "94712831826" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,947xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94712831826,947xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_14_04_06_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUxXdGZxc3JSVVV6TjFMdzBNQ2djdExOaUxjNXFESUFYbDdRQ095K0cybz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm90U2VGT2lrbDNxR2V3WG5TMzh4RGR2MFJ4SDdrU3ljS0MvZHRqUDEySEE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiR0tDU0lzVnloZytMeDR0QnJWNXBsMHRMQVVOZHMvMU9vc1Z1bHlNYlIydz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJEempNYWdEc0wzdTVTVHBXb3pJOVpPdFlhaEdiUzJOSmFSVlkvRGhTbTA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0pPdmY0blY1NE5mdkZNNERFSS8rb3RIdWdTbjhDZEFUdnNJSGkzbUptcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlJhY3JsUDVGeFBrb3Z0M2ZrSFBXL0FUbE02ZjBaa1JEN25YZ25SWWh0Mnc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBQzlkaE5lc1h1NWFmem8xc0ZFOU1GakRyYUhGbUdQZitmaG1DUGxpdGxvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiKytaQi81T0dNaXNEdWxGM3BRN0VxMmI2VTczcGFQVklqWWxDOUVCUDNrQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJEUEtFMEJ4dk9Jbmpka1pSR3V6Y3kzNFkrSTNqRG1WMTk1R3pCOVZPK2FBdnNxeWVidWFsQWJYTkgwTkQycDJEcU1BQzhERVVNNjVxemZQL3F2aEZoQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjEsXCJhZHZTZWNyZXRLZXlcIjpcIlVNbm5lSEVMaXpBMFArTmRCT05CQXlFMnJUNWl3a0hlRmdDTTBXam5rajA9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI5NDcxMjgzMTgyNkBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI1QzQ3M0U0Mjk3RDQ1REM5QjEyNDI5MDAyM0Y3MUExM1wifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyNDA5MjU0fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiR0NKMjB3V1BUTW1GeFhweTdrRVhod1wiLFwicGhvbmVJZFwiOlwiOGY2NDI3ZDctMjZjZS00YmQ0LTg2NWUtMTYxYzdkZDM0MzAxXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZzhwQ0w3dFA0bmJGNW9FanFUKzRleXZqckU9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia3lmd2FhLy8zWTc2STVleVRrTFZHWWNWWWtZPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIlNESjlLVEREXCIsXCJtZVwiOntcImlkXCI6XCI5NDcxMjgzMTgyNjoyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjI0OTc4Mjg5OTYxNzgyMjoyQGxpZFwiLFwibmFtZVwiOlwi6pyxypzhtIDJosmqyo/htIBcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ01xZDBlY0ZFSjZWeGJBR0dBST1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcInZlMUw4dTlnVzh1ZHlJY3N1Z3ZTRUppMDd1Tkx0S0lsZnRWM0t2ZjhXbHc9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJZYW9mTldBdkJIZUpBajhOaWRQdFFISzJPTWFwQzVSb1IvNGZwU0s1ZmJaS1BPZ09rdDZRMGtuWityTnlRcmgyZHB4aGFrVUVNUVlXSnQrZnVsaWlCQT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjRseHJqMzNRYVpLYm1vbmNvWTd1U2dKdTZWbFVSTjlrNnJ2N05vbmszRUFvR2ZuUFVzMDZrdFlZL3ovYnFGT2E0Q3lMVFJoQkZWaUZaNklWM2NYV2h3PT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5NDcxMjgzMTgyNjoyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmIzdFMvTHZZRnZMbmNpSExMb0wwaENZdE83alM3U2lKWDdWZHlyMy9GcGNcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEyNDA5MjQ5LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUdQT1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdQTy5qc29uIjogIntcImtleURhdGFcIjpcImkyaEp0UlFUdnVMWE16a3Q2S3RQdmNLbE0vWDVQODN3TUJrbVZueXJOd2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU1OTUxNDgyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyNDA0NTc3NTUyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐒𝐡𝐮𝐚𝐢𝐥-𝐦𝐝",
  ownername:process.env.OWNER_NAME|| "𝐈𝐭'𝐬 𝐦𝐞 𝐬𝐡𝐚𝐠𝐢𝐲𝐚",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
