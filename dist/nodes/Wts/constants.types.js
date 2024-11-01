"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notSend = exports.Constants = void 0;
class Constants {
    static getRequesConfig(receivedToken) {
        const baseUrlAndToken = {
            token: '',
            baseUrl: ''
        };
        if (receivedToken.startsWith("staging_")) {
            baseUrlAndToken.token = receivedToken.replace("staging_", "");
            baseUrlAndToken.baseUrl = "https://api-staging.helena.run";
        }
        else if (receivedToken.startsWith("test_")) {
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
exports.Constants = Constants;
exports.notSend = 'NOT_SEND';
//# sourceMappingURL=constants.types.js.map