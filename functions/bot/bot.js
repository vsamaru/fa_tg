const Telegraf = require('telegraf');
const startAction = require('./actions/start')
const set = require('./actions/set')
const help = require('./actions/help')
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => {
  return startAction(ctx)
})
bot.settings(ctx => {
  return set(ctx)
})
bot.help(ctx => {
  return help(ctx)
})

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return { statusCode: 200, body: '' };
  } catch (e) {
    console.log(e)
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }

}
