import DotEnv from 'dotenv';
import Zenbot from './zenbot/zenbot'
import ZenbotTwitch from './zenbot-twitch/zenbot-twitch'
import ZenbotDiscord from './zenbot-discord/zenbot-discord'
import ZenbotWeb from './zenbot-web/zenbot-web'
import ZenbotBase from './zenbot-base/zenbot-base'
import ZenbotSocket from './zenbot-socket/zenbot-socket';
import { idText } from 'typescript';

console.log('Starting up Zenbot...');
DotEnv.config();

const tokens = {
  twitchClientID:process.env.TWITCH_CLIENT_ID,
  twitchClientSecret:process.env.TWITCH_CLIENT_SECRET,
  twitchAccessToken:process.env.TWITCH_ACCESS_TOKEN,
  twitchRefreshToken:process.env.TWITCH_REFRESH_TOKEN,
  discordToken:process.env.DISCORD_TOKEN
}

let zenbot = new Zenbot(tokens);

process.on('SIGINT', (code) => {
  zenbot.disconnect();
});

process.on('SIGTERM', (code) => {
  //nothing
});

process.on('SIGQUIT', (code) => {
  //nothing
});