"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zenbot_twitch_1 = __importDefault(require("../zenbot-twitch/zenbot-twitch"));
const zenbot_discord_1 = __importDefault(require("../zenbot-discord/zenbot-discord"));
const zenbot_base_1 = __importDefault(require("../zenbot-base/zenbot-base"));
class Zenbot {
    constructor(tokens) {
        this.zenbotTwitch = new zenbot_twitch_1.default(this, tokens.twitchClientID, tokens.twitchAccessToken, tokens.twitchClientSecret, tokens.twitchRefreshToken);
        this.zenbotDiscord = new zenbot_discord_1.default(this, tokens.discordToken);
        //this.zenbotWeb = new ZenbotWeb(this);
        this.zenbotBase = new zenbot_base_1.default(this);
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
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.zenbotBase.disconnect();
            yield this.zenbotTwitch.disconnect();
            yield this.zenbotDiscord.disconnect();
            //await this.zenbotWeb.disconnect();
            //await this.zenbotSocket.disconnect();
            process.exit(0);
        });
    }
}
exports.default = Zenbot;
//# sourceMappingURL=zenbot.js.map