"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WtsCoreService = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_types_1 = require("./constants.types");
const utils_1 = require("../utils");
class WtsCoreService {
    static async getCustomFields(otp) {
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/contact/custom-field`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const fields = response.data;
            fields.push({ name: 'Undefined', key: constants_types_1.notSend });
            fields.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
            return fields.map((field) => ({
                name: field.name,
                value: field.key,
            }));
        }
        catch (error) {
            throw new Error(`Failed to load custom fields: ${error.response.data.text}`);
        }
    }
    static async getTagsIds(otp) {
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/tag`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const tags = response.data;
            tags.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
            return tags.map((tag) => ({
                name: tag.name,
                value: tag.id,
            }));
        }
        catch (error) {
            throw new Error(`Failed to load tags: ${error.response.data.text}`);
        }
    }
    static async getUsersIds(otp) {
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/agent`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const users = response.data;
            const mappedResult = users.map((user) => ({
                name: user.name,
                value: user.userId,
            }));
            mappedResult.push({ name: 'Undefined', value: constants_types_1.notSend });
            mappedResult.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
            return mappedResult;
        }
        catch (error) {
            throw new Error(`Failed to load users: ${error.response.data.text}`);
        }
    }
    static async getDepartmentsIds(otp) {
        const credentials = await otp.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/department`;
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const departments = response === null || response === void 0 ? void 0 : response.data;
            departments.push({ name: 'Undefined', id: constants_types_1.notSend });
            departments.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
            return departments.map((department) => ({
                name: department.name,
                value: department.id,
            }));
        }
        catch (error) {
            throw new Error(`Failed to load departments: ${error.response.data.text}`);
        }
    }
    static async getUsersByDepartments(departmentId, ild) {
        const credentials = await ild.getCredentials('wtsApi');
        const receivedToken = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/agent`;
        if (!departmentId) {
            throw new Error(`Choose department`);
        }
        try {
            const response = await axios_1.default.get(url, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
            const users = response.data;
            const result = [];
            result.push({ name: 'Undefined', id: constants_types_1.notSend });
            users.map((user) => {
                user.departments.map((element) => {
                    if (element.departmentId === departmentId) {
                        result.push(user);
                    }
                });
            });
            result.sort((a, b) => {
                if (a.name === 'Undefined')
                    return -1;
                if (b.name === 'Undefined')
                    return 1;
                return a.name.localeCompare(b.name);
            });
            return result.map((user) => ({
                name: user.name,
                value: user.userId || user.id,
            }));
        }
        catch (error) {
            throw new Error(`Failed to load users: ${error.response.data.text}`);
        }
    }
    static async getAllContacts(params, receivedToken) {
        var _a;
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        let url = `${baseUrl}/core/v1/contact`;
        if (params.includeDetails) {
            const parameters = new URLSearchParams({});
            (_a = params.includeDetails) === null || _a === void 0 ? void 0 : _a.forEach((details) => parameters.append('IncludeDetails', details));
            url += `?${parameters.toString()}`;
        }
        try {
            const data = await (0, utils_1.sendRequestOrAutoPagination)({
                ...params,
                status: params.status
            }, url, token);
            return data;
        }
        catch (error) {
            throw new Error(`API request failed: ${error.response.data.text}`);
        }
    }
    static async getContactById(contactId, includeDetails, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        let urlContact = `${baseUrl}/core/v1/contact/${contactId}`;
        if (includeDetails.length) {
            const parameters = new URLSearchParams({});
            includeDetails === null || includeDetails === void 0 ? void 0 : includeDetails.forEach((details) => parameters.append('IncludeDetails', details));
            urlContact += `?${parameters.toString()}`;
        }
        try {
            const response = await axios_1.default.get(urlContact, {
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
    static async getContactByPhone(phoneNumber, includeDetails, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        let url = `${baseUrl}/core/v1/contact/phonenumber/${phoneNumber}`;
        if (includeDetails.length) {
            const parameters = new URLSearchParams({});
            includeDetails === null || includeDetails === void 0 ? void 0 : includeDetails.forEach((details) => parameters.append('IncludeDetails', details));
            url += `?${parameters.toString()}`;
        }
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
    static async createContact(body, receivedToken) {
        const { token, baseUrl } = constants_types_1.Constants.getRequesConfig(receivedToken);
        const url = `${baseUrl}/core/v1/contact`;
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
}
exports.WtsCoreService = WtsCoreService;
//# sourceMappingURL=wts-core.service.js.map