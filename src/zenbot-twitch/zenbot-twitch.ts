import { ApiClient } from 'twitch';
import { ChatClient } from 'twitch-chat-client';
import { AccessToken, RefreshableAuthProvider, StaticAuthProvider } from 'twitch-auth';
import Chalk from 'chalk';
import { Handler } from 'express';

class ZenbotTwitch{
    twitchAPIClient:ApiClient;
    twitchChatClient:ChatClient;
    
    constructor(zenbot, twitchClientID, twitchAccessToken, twitchClientSecret, twitchRefreshToken){
        let authProvider = new RefreshableAuthProvider(
            new StaticAuthProvider(twitchClientID, twitchAccessToken),
            {
                clientSecret: twitchClientSecret,
                refreshToken: twitchRefreshToken,
                onRefresh: (token) => {
                    // do things with the new token data, e.g. save them in your database
                }
            }
        );

        this.twitchAPIClient = new ApiClient({ authProvider });
        this.twitchChatClient = new ChatClient(authProvider, { channels: ['kai_caerndow'] });

        this.twitchChatClient.onJoin((channel, user) => {
            console.log(Chalk.green('[OK!] ZenbotTwitch ready!'));
        });
        
        this.twitchChatClient.onMessage((channel, user, message, msg) => {
            zenbot.onTwitchMessage(message, user, channel);
        });
        
        this.twitchChatClient.connect();
    }

    disconnect(){
        console.log(Chalk.yellow(['[WARNING!] ZenbotTwitch disconnecting.']))
        this.twitchChatClient.quit();
    }

}

export default ZenbotTwitch;





