export class Constants {
    static getRequesConfig(receivedToken: string) : {token: string, baseUrl: string}{
        const baseUrlAndToken = {
            token: '',
            baseUrl: ''
        };
        
        if(receivedToken.includes("staging")){
            baseUrlAndToken.token = receivedToken.replace("staging", "");
            baseUrlAndToken.baseUrl = "https://api-staging.helena.run"
        }
        
        else if(receivedToken.includes("test")) {
            baseUrlAndToken.token = receivedToken.replace("test", "");
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