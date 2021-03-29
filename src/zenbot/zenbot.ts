import ZenbotTwitch from '../zenbot-twitch/zenbot-twitch'
import ZenbotDiscord from '../zenbot-discord/zenbot-discord'
import ZenbotWeb from '../zenbot-web/zenbot-web'
import ZenbotBase from '../zenbot-base/zenbot-base'
import ZenbotSocket from '../zenbot-socket/zenbot-socket';
import { resolveModuleName } from 'typescript';

class Zenbot {
  zenbotTwitch: ZenbotTwitch;
  zenbotDiscord: ZenbotDiscord;
  zenbotWeb: ZenbotWeb;
  zenbotBase: ZenbotBase;
  zenbotSocket: ZenbotSocket;

  activeUsers:{};
  twitchNames:{};


  constructor(tokens) {
    this.zenbotTwitch = new ZenbotTwitch(this, tokens.twitchClientID, tokens.twitchAccessToken, tokens.twitchClientSecret, tokens.twitchRefreshToken);
    this.zenbotDiscord = new ZenbotDiscord(this, tokens.discordToken);
    //this.zenbotWeb = new ZenbotWeb(this);
    this.zenbotBase = new ZenbotBase(this);
    //this.zenbotSocket = new ZenbotSocket(this);

  }
  onTwitchMessage(msg, author, channel) {
    console.log('<' + author + '> ' + msg);
  }

  onDiscordMessage(msg, author, channel) {
    console.log('<' + author.username + '> ' + msg);
    //if(msg === '::register') this.zenbotBase.registerUser(author);
    console.log(Object.keys(author));
  }

  async disconnect() {
    await this.zenbotBase.disconnect();
    await this.zenbotTwitch.disconnect();
    await this.zenbotDiscord.disconnect();
    //await this.zenbotWeb.disconnect();
    //await this.zenbotSocket.disconnect();

    process.exit(0);
  }
}

export default Zenbot;