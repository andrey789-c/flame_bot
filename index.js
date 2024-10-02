const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require('dotenv').config()

const bot = new Telegraf(process.env.KEY_CODE)

bot.start((ctx) => ctx.reply('Здесь ты можешь задать вопрос спикеру'));

bot.on(message('text'), async (ctx) => {

  // if(+process.env.KITAEZA_ID !== ctx.update.message.from.id && +process.env.NARINE_ID !== ctx.update.message.from.id) {
    await bot.telegram.sendMessage(process.env.KITAEZA_ID, ctx.message.text)
    await bot.telegram.sendMessage(process.env.NARINE_ID, ctx.message.text)
    
    ctx.reply("Спасибо за вопрос!")
  // }
})

bot.launch()