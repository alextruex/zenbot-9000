"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitch_1 = require("twitch");
const twitch_chat_client_1 = require("twitch-chat-client");
const twitch_auth_1 = require("twitch-auth");
const chalk_1 = __importDefault(require("chalk"));
class ZenbotTwitch {
    constructor(zenbot, twitchClientID, twitchAccessToken, twitchClientSecret, twitchRefreshToken) {
        let authProvider = new twitch_auth_1.RefreshableAuthProvider(new twitch_auth_1.StaticAuthProvider(twitchClientID, twitchAccessToken), {
            clientSecret: twitchClientSecret,
            refreshToken: twitchRefreshToken,
            onRefresh: (token) => {
                // do things with the new token data, e.g. save them in your database
            }
        });
        this.twitchAPIClient = new twitch_1.ApiClient({ authProvider });
        this.twitchChatClient = new twitch_chat_client_1.ChatClient(authProvider, { channels: ['kai_caerndow'] });
        this.twitchChatClient.onJoin((channel, user) => {
            console.log(chalk_1.default.green('[OK!] ZenbotTwitch ready!'));
        });
        this.twitchChatClient.onMessage((channel, user, message, msg) => {
            zenbot.onTwitchMessage(message, user, channel);
        });
        this.twitchChatClient.connect();
    }
    disconnect() {
        console.log(chalk_1.default.yellow(['[WARNING!] ZenbotTwitch disconnecting.']));
        this.twitchChatClient.quit();
    }
}
exports.default = ZenbotTwitch;
//# sourceMappingURL=zenbot-twitch.js.map