import { Client } from 'discord.js';
import Chalk from 'chalk';

class ZenbotDiscord {
  discordClient: Client;

  constructor(zenbot, discordToken) {
    this.discordClient = new Client();

    this.discordClient.on("ready", () => {
      console.log(Chalk.green('[OK!] ZenbotDiscord ready!'));
    });

    this.discordClient.on("message", (msg) => {
      zenbot.onDiscordMessage(msg.content, msg.author, msg.channel);
    });

    this.discordClient.login(discordToken);
  }

  disconnect(){
    console.log(Chalk.yellow(['[WARNING!] ZenbotDiscord disconnecting.']))
    this.discordClient.destroy();
  }
}

export default ZenbotDiscord;