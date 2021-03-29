"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const zenbot_1 = __importDefault(require("./zenbot/zenbot"));
console.log('Starting up Zenbot...');
dotenv_1.default.config();
const tokens = {
    twitchClientID: process.env.TWITCH_CLIENT_ID,
    twitchClientSecret: process.env.TWITCH_CLIENT_SECRET,
    twitchAccessToken: process.env.TWITCH_ACCESS_TOKEN,
    twitchRefreshToken: process.env.TWITCH_REFRESH_TOKEN,
    discordToken: process.env.DISCORD_TOKEN
};
let zenbot = new zenbot_1.default(tokens);
process.on('SIGINT', (code) => {
    zenbot.disconnect();
});
process.on('SIGTERM', (code) => {
    //nothing
});
process.on('SIGQUIT', (code) => {
    //nothing
});
//# sourceMappingURL=main.js.map