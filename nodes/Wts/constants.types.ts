export class Constants {
    static getRequesConfig(receivedToken: string) : {token: string, baseUrl: string}{
        const baseUrlAndToken = {
            token: '',
            baseUrl: ''
        };
        
        if(receivedToken.startsWith("staging_")) {
            baseUrlAndToken.token = receivedToken.replace("staging_", "");
            baseUrlAndToken.baseUrl = "https://api-staging.helena.run"
        }
        else if(receivedToken.startsWith("test_")) {
            baseUrlAndToken.token = receivedToken.replace("test_", "");
            baseUrlAndToken.baseUrl = "https://api-test.helena.run";
        }
        else {
            baseUrlAndToken.token = receivedToken;
            baseUrlAndToken.baseUrl = "https://api.wts.chat";
        }

        return baseUrlAndToken;
    }
}

export const notSend = 'NOT_SEND';