"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const chalk_1 = __importDefault(require("chalk"));
class ZenbotDiscord {
    constructor(zenbot, discordToken) {
        this.discordClient = new discord_js_1.Client();
        this.discordClient.on("ready", () => {
            console.log(chalk_1.default.green('[OK!] ZenbotDiscord ready!'));
        });
        this.discordClient.on("message", (msg) => {
            zenbot.onDiscordMessage(msg.content, msg.author, msg.channel);
        });
        this.discordClient.login(discordToken);
    }
    disconnect() {
        console.log(chalk_1.default.yellow(['[WARNING!] ZenbotDiscord disconnecting.']));
        this.discordClient.destroy();
    }
}
exports.default = ZenbotDiscord;
//# sourceMappingURL=zenbot-discord.js.map