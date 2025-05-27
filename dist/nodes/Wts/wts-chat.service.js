"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WtsChatService = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const axios_1 = __importDefault(require("axios"));
const constants_types_1 = require("./constants.types");
const utils_1 = require("../utils");
class WtsChatService {
    static ThrowError(inputData, file) {
        throw new Error(`
						${inputData}\n
						${inputData[0].binary}\n
						${inputData[0].binary[file]}\n
						${inputData[0].binary[file].fileName}\n
						${inputData[0].binary[file].fileType}\n
						${inputData[0].binary[file].mimeType}\n
						${inputData[0].binary[file].fileExtension}\n
					`);
    }
    static async getMessageById(idMessage, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/message/${idMessage}`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getMessageStatus(idMessage, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/message/${idMessage}/status`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getAllMessages(params, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/message`;
        try {
            const response = await (0, utils_1.sendRequestOrAutoPagination)(params, url, token);
            return response;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageText(body, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/message/send-sync` : `${baseUrl}/chat/v1/message/send`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageFile(body, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/message/send-sync` : `${baseUrl}/chat/v1/message/send`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageTemplate(body, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/message/send-sync` : `${baseUrl}/chat/v1/message/send`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getAllSessions(params, receivedToken, urlWithParams) {
        const { token } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const parameters = {
            ...params,
            ...(0, utils_1.paramsDefault)(params)
        };
        try {
            const response = await (0, utils_1.sendRequestOrAutoPagination)(parameters, urlWithParams, token);
            return response;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getSessionById(body, receivedToken) {
        var _a, _b, _c;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        let url = `${baseUrl}/chat/v1/session/${body.sessionId}`;
        const params = new URLSearchParams({});
        if (body.includeDetails) {
            body.includeDetails.forEach((details) => params.append('includeDetails', details));
        }
        url += `?${params.toString()}`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(`API request failed: ${(_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : error}`);
        }
    }
    static async updateTransfer(sessionId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/session/${sessionId}/transfer`;
        try {
            const response = await axios_1.default.put(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async updateStatusSession(sessionId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/session/${sessionId}/status`;
        try {
            const response = await axios_1.default.put(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async assignUserToSession(sessionId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/session/${sessionId}/assignee`;
        try {
            const response = await axios_1.default.put(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async concludeSession(sessionId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/session/${sessionId}/complete`;
        try {
            const response = await axios_1.default.put(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async updateSession(sessionId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v2/session/${sessionId}/partial`;
        const bodyRequest = {
            ...(body.statusSessionUpdate && { status: body.statusSessionUpdate }),
            ...(body.endAt && { endAt: body.endAt }),
            ...(body.number && { number: body.number }),
            ...(body.departmentId && { departmentId: body.departmentId }),
            ...(body.userId && { userId: body.userId }),
            ...(body.metadataObject && { metadata: body.metadataObject }),
            ...(body.fields && { fields: body.fields })
        };
        try {
            const response = await axios_1.default.put(url, bodyRequest, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendChatbot(body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/chatbot/send`;
        const bodyRequest = {
            ...(body.botKey && { botKey: body.botKey }),
            ...(body.from && { from: body.from }),
            ...(body.to && { to: body.to }),
            ...(body.sessionId && { sessionId: body.sessionId }),
            options: {
                ...(body.skipIfBotInExecution && { skipIfBotInExecution: body.skipIfBotInExecution }),
                ...(body.skipIfInProgress && { skipIfInProgress: body.skipIfInProgress }),
                ...(body.forceStartSession && { forceStartSession: body.forceStartSession }),
            },
            ...(body.sessionMetadata && { sessionMetada: body.sessionMetadata }),
            ...(body.contactMetadata && { contactMetadata: body.contactMetadata }),
        };
        try {
            const response = await axios_1.default.post(url, bodyRequest, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageTextSession(sessionId, text, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/session/${sessionId}/message/sync` : `${baseUrl}/chat/v1/session/${sessionId}/message`;
        const body = {
            text
        };
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageFileUrlSession(sessionId, body, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/session/${sessionId}/message/sync` : `${baseUrl}/chat/v1/session/${sessionId}/message`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async sendMessageTemplateSession(sessionId, body, receivedToken, synchronous) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = synchronous ? `${baseUrl}/chat/v1/session/${sessionId}/message/sync` : `${baseUrl}/chat/v1/session/${sessionId}/message`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getAllSequences(params, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        let url = `${baseUrl}/chat/v1/sequence`;
        const queryParams = new URLSearchParams({});
        if (params.includeDetailsSequence) {
            params.includeDetailsSequence.forEach((details) => { queryParams.append('IncludeDetails', details); });
        }
        url += `?${queryParams.toString()}`;
        try {
            const response = await (0, utils_1.sendRequestOrAutoPagination)(params, url, token);
            return response;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getContactsBySequence(sequenceId, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence/${sequenceId}/contact`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async addContactToSequence(sequenceId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence/${sequenceId}/contact`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async removeContactToSequence(sequenceId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence/${sequenceId}/contact`;
        try {
            const response = await axios_1.default.delete(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                data: body
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async addContactsToSequence(sequenceId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence/${sequenceId}/contact/batch`;
        try {
            const response = await axios_1.default.post(url, body, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async removeContactsToSequence(sequenceId, body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence/${sequenceId}/contact/batch`;
        try {
            const response = await axios_1.default.delete(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                data: body
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async saveFile(tes, file, mimetype, filename, contentLength, token) {
        try {
            const dataUrl = await WtsChatService.getUrlFile({ mimeType: mimetype, name: filename }, token);
            const urlFile = dataUrl.urlUpload;
            await WtsChatService.updateFileS3(urlFile, file, mimetype, contentLength);
            const result = await WtsChatService.saveFileS3(filename, mimetype, dataUrl.keyS3, token);
            return result;
        }
        catch (error) {
            console.log(error);
            throw new n8n_workflow_1.NodeApiError(tes.getNode(), {
                message: 'Error in save file',
                description: 'Save File Error: ' + error.message,
            });
        }
    }
    static async getChannelsIds(otp) {
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/channel`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const channels = (response === null || response === void 0 ? void 0 : response.data) || [];
            channels.push({ name: 'Undefined', id: constants_types_1.notSend });
            return channels.map((channel) => ({
                name: channel.identity ? (channel.identity.humanId + ' ' + channel.identity.platform) : 'Undefined',
                value: channel.id,
            })).sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
        }
        catch (error) {
            throw new Error(`Failed to load channels: ${error.response.data.text}`);
        }
    }
    static async getBots(otp) {
        var _a, _b;
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/chatbot`;
        let hasMore = true;
        let pageNumber = 0;
        const result = [];
        while (hasMore) {
            pageNumber += 1;
            try {
                const response = await axios_1.default.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        pageNumber,
                    }
                });
                const data = response === null || response === void 0 ? void 0 : response.data;
                result.push(...data.items);
                if (!data.hasMorePages) {
                    hasMore = false;
                }
            }
            catch (error) {
                throw new Error(`Failed to load bots: ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.text}`);
            }
        }
        const mappedResult = result.map((bot) => ({
            name: bot.name,
            value: bot.id
        }));
        mappedResult.push({ name: 'Undefined', value: constants_types_1.notSend });
        return mappedResult.sort((a, b) => {
            if (a.name === 'Undefined')
                return -1;
            if (b.name === 'Undefined')
                return 1;
            return a.name.localeCompare(b.name);
        });
    }
    static async getChatbots(otp) {
        var _a, _b;
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/chatbot?Types=Automation`;
        let hasMore = true;
        let pageNumber = 0;
        const result = [];
        while (hasMore) {
            pageNumber += 1;
            try {
                const response = await axios_1.default.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        pageNumber,
                    }
                });
                const data = response === null || response === void 0 ? void 0 : response.data;
                result.push(...data.items);
                if (!data.hasMorePages) {
                    hasMore = false;
                }
            }
            catch (error) {
                throw new Error(`Failed to load bots: ${(_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.text}`);
            }
        }
        const mappedResult = result.map((bot) => ({
            name: bot.name,
            value: bot.key
        }));
        mappedResult.push({ name: 'Undefined', value: constants_types_1.notSend });
        return mappedResult.sort((a, b) => {
            if (a.name === 'Undefined')
                return -1;
            if (b.name === 'Undefined')
                return 1;
            return a.name.localeCompare(b.name);
        });
    }
    static async getTemplates(channelId, ild) {
        const credentials = await ild.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/template?ChannelId=${channelId}&IncludeDetails=Params`;
        const result = [];
        let hasMore = true;
        let pageNumber = 0;
        while (hasMore) {
            pageNumber += 1;
            try {
                const response = await axios_1.default.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        pageNumber: pageNumber
                    }
                });
                const data = response.data;
                result.push(...data.items);
                if (!data.hasMorePages) {
                    hasMore = false;
                }
            }
            catch (error) {
                throw new Error(`Failed to load templates: ${error.response.data.text}`);
            }
        }
        return result === null || result === void 0 ? void 0 : result.map((template) => {
            return {
                name: template.name,
                value: JSON.stringify({
                    id: template === null || template === void 0 ? void 0 : template.id,
                    fileType: template === null || template === void 0 ? void 0 : template.fileType,
                    params: template === null || template === void 0 ? void 0 : template.params
                })
            };
        }).concat([{ name: 'Undefined', value: constants_types_1.notSend }]).sort((a, b) => {
            if (a.name === 'Undefined')
                return -1;
            if (b.name === 'Undefined')
                return 1;
            return a.name.localeCompare(b.name);
        });
    }
    static async getTemplateIds(channelId, receivedToken, nameTemplate) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/template?ChannelId=${channelId}`;
        const result = [];
        let hasMore = true;
        let pageNumber = 0;
        while (hasMore) {
            pageNumber += 1;
            try {
                const response = await axios_1.default.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        pageNumber: pageNumber
                    }
                });
                const data = response.data;
                result.push(...data.items);
                if (!data.hasMorePages) {
                    hasMore = false;
                }
            }
            catch (error) {
                throw new Error(`Failed to load templates: ${error.response.data.text}`);
            }
        }
        const resultObj = result.find((item) => item.name === nameTemplate);
        return resultObj;
    }
    static async getNameTemplates(templateName, channelId, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/template?ChannelId=${channelId}&IncludeDetails=Params&PageSize=100`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    name: templateName
                }
            });
            const data = response.data;
            const result = data.items.flatMap((x) => {
                var _a;
                return (_a = x.params) === null || _a === void 0 ? void 0 : _a.map((p) => ({
                    name: p.name,
                    value: p.name
                }));
            });
            return result.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
        }
        catch (error) {
            throw new Error(`Failed to load template parameters: ${error.response.data.text}`);
        }
    }
    static async getTemplatesSession(sessionId, ild) {
        const credentials = await ild.getCredentials('wtsApi');
        const token = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const body = {
            sessionId
        };
        try {
            const session = await WtsChatService.getSessionById(body, token);
            const templates = await WtsChatService.getTemplates(session.channelId, ild);
            return templates;
        }
        catch (error) {
            throw new Error(`Failed to load template parameters: ${error}`);
        }
    }
    static async getSequences(ild) {
        const credentials = await ild.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/chat/v1/sequence`;
        const result = [];
        let hasMore = true;
        let pageNumber = 0;
        let pageSize = 100;
        while (hasMore) {
            pageNumber += 1;
            try {
                const response = await axios_1.default.get(url, {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    params: {
                        pageNumber: pageNumber,
                        pageSize: pageSize
                    }
                });
                const data = response.data;
                result.push(...data.items);
                if (!data.hasMorePages) {
                    hasMore = false;
                }
            }
            catch (error) {
                throw new Error(`Failed to load sequences: ${error.response.data.text}`);
            }
        }
        const mappedResult = result.map((sequence) => ({
            name: sequence.name,
            value: sequence.id
        }));
        return mappedResult.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    }
    static passRequestValues(result, data) {
        result.totalItems = data.totalItems;
        result.totalPages = data.totalPages;
        result.pageSize = data.pageSize;
        result.pageNumber = data.pageNumber;
        result.hasMorePages = data.hasMorePages;
    }
    static async getUrlFile(bodyFile, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/file/upload`;
        const fileRequest = {
            mimeType: bodyFile.mimeType,
            name: bodyFile.name
        };
        try {
            const response = await axios_1.default.post(url, fileRequest, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed get url file:  ${error.response.data.text}`);
        }
    }
    static async updateFileS3(urlFile, dataFile, mimeType, contentLength) {
        try {
            const response = await axios_1.default.put(urlFile, dataFile, {
                headers: {
                    'Content-Type': mimeType,
                    'Content-length': contentLength
                }
            });
            const data = response;
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async saveFileS3(filename, mimetype, keyS3, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/file`;
        const bodyRequest = {
            name: filename,
            keyS3: keyS3,
            mimeType: mimetype,
            generateThumb: false
        };
        try {
            const result = await axios_1.default.put(url, bodyRequest, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            return result;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
}
exports.WtsChatService = WtsChatService;
//# sourceMappingURL=wts-chat.service.js.map