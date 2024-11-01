"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notSend = exports.Constants = void 0;
class Constants {
    static getRequesConfig(receivedToken) {
        const baseUrlAndToken = {
            token: '',
            baseUrl: ''
        };
        if (receivedToken.includes("staging")) {
            baseUrlAndToken.token = receivedToken.replace("staging", "");
            baseUrlAndToken.baseUrl = "https://api-staging.helena.run";
        }
        else if (receivedToken.includes("test")) {
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
exports.Constants = Constants;
exports.notSend = 'NOT_SEND';
//# sourceMappingURL=constants.types.js.map