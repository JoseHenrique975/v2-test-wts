"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WtsChat = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const wts_core_service_1 = require("./wts-core.service");
const wts_chat_service_1 = require("./wts-chat.service");
const wts_crm_service_1 = require("./wts-crm.service");
const GenericDescription_1 = require("./descriptions/GenericDescription");
const ContactDescription_1 = require("./descriptions/ContactDescription");
const MessageDescription_1 = require("./descriptions/MessageDescription");
const PanelDescription_1 = require("./descriptions/PanelDescription");
const SessionDescription_1 = require("./descriptions/SessionDescription");
const SequenceDescription_1 = require("./descriptions/SequenceDescription");
const constants_types_1 = require("./constants.types");
const descriptions_1 = require("./descriptions");
const utils_1 = require("../utils");
const buffer_1 = require("buffer");
const utils_2 = require("../utils");
class WtsChat {
    constructor() {
        this.description = {
            displayName: 'WTS Chat',
            name: 'wtsChat',
            icon: { light: 'file:images/wtslogo.svg', dark: 'file:images/wtslogodarkmode.svg' },
            group: ['transform'],
            version: [1],
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Get data from Wts API',
            defaults: {
                name: 'WTS Chat',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'wtsApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.wts.chat',
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Chatbot',
                            value: 'chatbot'
                        },
                        {
                            name: 'Contact',
                            value: 'contact',
                        },
                        {
                            name: 'Message',
                            value: 'message',
                        },
                        {
                            name: 'Panel',
                            value: 'panel'
                        },
                        {
                            name: 'Sequence',
                            value: 'sequence'
                        },
                        {
                            name: 'Session',
                            value: 'session',
                        },
                    ],
                    default: 'contact',
                    description: 'Resource to use',
                },
                ...SequenceDescription_1.sequenceOperations,
                ...ContactDescription_1.contactOperations,
                ...MessageDescription_1.messageOperations,
                ...PanelDescription_1.panelOperations,
                ...SessionDescription_1.sessionOperations,
                ...descriptions_1.chatbotOperations,
                ...SequenceDescription_1.sequenceFields,
                ...GenericDescription_1.commonFields,
                ...ContactDescription_1.contactFields,
                ...MessageDescription_1.messageFields,
                ...PanelDescription_1.updateCardFields,
                ...PanelDescription_1.panelFields,
                ...SessionDescription_1.sessionFields,
                ...SessionDescription_1.updateSessionFields,
                ...descriptions_1.chatbotFields,
                ...GenericDescription_1.dateFields,
                ...GenericDescription_1.pageFields,
                ...GenericDescription_1.metadataFields
            ],
        };
        this.methods = {
            loadOptions: {
                async getCustomFields() {
                    return await wts_core_service_1.WtsCoreService.getCustomFields(this);
                },
                async getTagsIds() {
                    return await wts_core_service_1.WtsCoreService.getTagsIds(this);
                },
                async getUsersIds() {
                    return await wts_core_service_1.WtsCoreService.getUsersIds(this);
                },
                async getUsersIdsUpdate() {
                    return await wts_core_service_1.WtsCoreService.getUsersIdsUpdate(this);
                },
                async getDepartmentsIds() {
                    return await wts_core_service_1.WtsCoreService.getDepartmentsIds(this);
                },
                async getDepartmentsIdsUpdate() {
                    return await wts_core_service_1.WtsCoreService.getDepartmentsIdsUpdate(this);
                },
                async getUsersByDepartments() {
                    var _a;
                    const departmentId = (_a = this.getCurrentNodeParameter('departmentId')) !== null && _a !== void 0 ? _a : this.getNodeParameter('departmentIdUpdatedSession');
                    return await wts_core_service_1.WtsCoreService.getUsersByDepartments(departmentId, this);
                },
                async getTagsAndUpdate() {
                    return await wts_core_service_1.WtsCoreService.getTagsAndUpdate(this);
                },
                async getPortfolio() {
                    return await wts_core_service_1.WtsCoreService.getPortfolio(this);
                },
                async getCustomFieldsUpdate() {
                    return await wts_core_service_1.WtsCoreService.getCustomFieldsUpdate(this);
                },
                async getPanels() {
                    return await wts_crm_service_1.WtsCrmService.getPanels(this);
                },
                async getCustomFieldsPanel() {
                    const panelId = this.getNodeParameter('panels');
                    return await wts_crm_service_1.WtsCrmService.getCustomFieldsPanel(panelId, this);
                },
                async getStepsPanelId() {
                    const panelId = this.getNodeParameter('panels');
                    return await wts_crm_service_1.WtsCrmService.getStepsPanelId(panelId, this);
                },
                async getTagsPanel() {
                    const panelId = this.getNodeParameter('panels');
                    return await wts_crm_service_1.WtsCrmService.getTagsPanel(panelId, this);
                },
                async getTagsByIdCard() {
                    const cardId = this.getNodeParameter('cardIdUpdateCard');
                    return await wts_crm_service_1.WtsCrmService.getTagsByIdCard(cardId, this);
                },
                async getCustomFieldsByIdCard() {
                    const idCard = this.getNodeParameter('cardIdUpdateCard');
                    const customFields = await wts_crm_service_1.WtsCrmService.getCustomFieldsByIdCard(idCard, this);
                    return customFields.map((field) => {
                        return {
                            name: field.name,
                            value: field.name
                        };
                    });
                },
                async getTemplates() {
                    const channelId = this.getCurrentNodeParameter('channelId');
                    const result = await wts_chat_service_1.WtsChatService.getTemplates(channelId, this);
                    return result;
                },
                async getChannelsIds() {
                    return await wts_chat_service_1.WtsChatService.getChannelsIds(this);
                },
                async getBots() {
                    return await wts_chat_service_1.WtsChatService.getBots(this);
                },
                async getChatbots() {
                    return await wts_chat_service_1.WtsChatService.getChatbots(this);
                },
                async getTemplatesSession() {
                    const sessionId = this.getNodeParameter('sessionId');
                    const template = await wts_chat_service_1.WtsChatService.getTemplatesSession(sessionId, this);
                    return template;
                },
                async getNamesParamsTemplates() {
                    const templates = this.getNodeParameter('templates');
                    const temp = (0, n8n_workflow_1.jsonParse)(templates);
                    const params = temp === null || temp === void 0 ? void 0 : temp.params;
                    return params.map((param) => {
                        return {
                            name: param.name,
                            value: param.name
                        };
                    });
                },
                async getNameParamsTemplatesSession() {
                    const template = this.getNodeParameter('templatesBySession');
                    const temp = (0, n8n_workflow_1.jsonParse)(template);
                    const params = temp.params;
                    return params.map((param) => {
                        return {
                            name: param.name,
                            value: param.name
                        };
                    });
                },
                async getSequences() {
                    return await wts_chat_service_1.WtsChatService.getSequences(this);
                }
            },
        };
    }
    async execute() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const results = [[]];
        const items = this.getInputData();
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        const credentials = await this.getCredentials('wtsApi');
        const token = credentials === null || credentials === void 0 ? void 0 : credentials.apiKey;
        for (let i = 0; i < items.length; i++) {
            if (resource === 'contact') {
                if (operation === 'getContactById') {
                    const idContact = this.getNodeParameter('contactId', i);
                    const includeDetails = this.getNodeParameter('includeDetailsContacts', i);
                    try {
                        var data = await wts_core_service_1.WtsCoreService.getContactById(idContact, includeDetails, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getContactByPhone') {
                    const phoneNumber = this.getNodeParameter('phonenumber', i);
                    const includeDetails = this.getNodeParameter('includeDetailsContacts', i);
                    try {
                        const data = await wts_core_service_1.WtsCoreService.getContactByPhone(phoneNumber, includeDetails, token);
                        const items = [{ json: data, },];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'listContacts') {
                    const autoPagination = this.getNodeParameter('autoPagination', i);
                    const maxPage = autoPagination ? this.getNodeParameter('maxPage', i) : null;
                    const includeDetails = this.getNodeParameter('includeDetailsContacts', i);
                    let status = this.getNodeParameter('statusContact', i);
                    const pageNumber = !autoPagination ? this.getNodeParameter('pageNumber', i) : null;
                    const pageSize = !autoPagination ? this.getNodeParameter('pageSize', i) : null;
                    const orderBy = this.getNodeParameter('orderBy', i);
                    const orderDirection = this.getNodeParameter('orderDirection', i);
                    const createdAtAfter = this.getNodeParameter('createdAtAfter', i);
                    const createdAtBefore = this.getNodeParameter('createdAtBefore', i);
                    const updatedAtAfter = this.getNodeParameter('updatedAtAfter', i);
                    const updatedAtBefore = this.getNodeParameter('updatedAtBefore', i);
                    const params = {
                        autoPagination,
                        ...(autoPagination && maxPage && { maxPage: maxPage }),
                        ...(!autoPagination && pageNumber && { pageNumber: pageNumber }),
                        includeDetails,
                        ...(status != "UNDEFINED" && { status: status }),
                        pageSize,
                        orderBy, orderDirection,
                        createdAtAfter, createdAtBefore,
                        updatedAtAfter, updatedAtBefore
                    };
                    try {
                        const data = await wts_core_service_1.WtsCoreService.getAllContacts(params, token);
                        const items = [{ json: data, }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'createContact') {
                    const name = this.getNodeParameter('name', i);
                    const email = this.getNodeParameter('email', i);
                    const phonenumber = this.getNodeParameter('phonenumber', i);
                    const instagram = this.getNodeParameter('instagram', i);
                    const annotation = this.getNodeParameter('annotation', i);
                    const customFields = this.getNodeParameter('customFields', i);
                    const tagIds = this.getNodeParameter('tagIds', i);
                    const metadata = this.getNodeParameter('metadata', i);
                    const upsert = this.getNodeParameter('upsert', i);
                    const getIfExists = this.getNodeParameter('getIfExists', i);
                    if (email) {
                        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                        const matchEmail = email.match(regexEmail);
                        if (!matchEmail) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'Invalid email!',
                                description: 'Invalid email!',
                            });
                        }
                    }
                    const customFieldsObject = (_a = customFields === null || customFields === void 0 ? void 0 : customFields.customFields) === null || _a === void 0 ? void 0 : _a.reduce((acc, field) => {
                        if (field.key != constants_types_1.notSend && field.key != null) {
                            acc[field.key] = field.value;
                        }
                        return acc;
                    }, {});
                    const metadataObject = (_b = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _b === void 0 ? void 0 : _b.reduce((acc, metadata) => {
                        acc[metadata.key] = metadata.value;
                        return acc;
                    }, {});
                    const body = {
                        name: name,
                        email: email,
                        phonenumber: phonenumber,
                        instagram: instagram,
                        annotation: annotation,
                        tagIds: tagIds,
                        ...(metadataObject && { metadata: metadataObject }),
                        ...(customFieldsObject && { customFields: customFieldsObject }),
                        options: {
                            ...(upsert && { upsert: upsert }),
                            ...(getIfExists && { getIfExists: getIfExists }),
                        }
                    };
                    try {
                        const data = await wts_core_service_1.WtsCoreService.createContact(body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'updateContact') {
                    const contactId = this.getNodeParameter('contactId', i);
                    let fields = this.getNodeParameter('fieldsUpdateContact', i);
                    const name = fields.includes('Name') ? this.getNodeParameter('nameUpdateContact', i) : null;
                    const phonenumber = fields.includes('PhoneNumber') ? this.getNodeParameter('phonenumberUpdateContact', i) : null;
                    const email = fields.includes('Email') ? this.getNodeParameter('emailUpdateContact', i) : null;
                    const instagram = fields.includes('Instagram') ? this.getNodeParameter('instagramUpdateContact', i) : null;
                    const annotation = fields.includes('Annotation') ? this.getNodeParameter('annotationUpdateContact', i) : null;
                    const tagIds = fields.includes('Tags') ? this.getNodeParameter('tagsUpdateContact', i) : null;
                    const portfolios = fields.includes('Portfolio') ? this.getNodeParameter('portfoliosUpdateContact', i) : null;
                    const sequences = fields.includes('SequenceIds') ? this.getNodeParameter('sequencesUpdateContact', i) : null;
                    const status = fields.includes('Status') ? this.getNodeParameter('statusUpdateContact', i) : null;
                    const pictureUrl = fields.includes('PictureUrl') ? this.getNodeParameter('pictureUrlUpdateContact', i) : null;
                    const source = fields.includes('Utm') ? this.getNodeParameter('sourceUtmUpdateContact', i) : null;
                    const medium = fields.includes('Utm') ? this.getNodeParameter('mediumUtmUpdateContact', i) : null;
                    const campaign = fields.includes('Utm') ? this.getNodeParameter('campaignUtmUpdateContact', i) : null;
                    const content = fields.includes('Utm') ? this.getNodeParameter('contentUtmUpdateContact', i) : null;
                    const headline = fields.includes('Utm') ? this.getNodeParameter('headlineUtmUpdateContact', i) : null;
                    const term = fields.includes('Utm') ? this.getNodeParameter('termUtmUpdateContact', i) : null;
                    const referralUrl = fields.includes('Utm') ? this.getNodeParameter('referralUrlUtmUpdateContact', i) : null;
                    const customFields = fields.includes('CustomFields') ? this.getNodeParameter('customFieldsUpdateContact', i) : null;
                    const metadata = fields.includes('Metadata') ? this.getNodeParameter('metadataUpdateContact', i) : null;
                    const metadataObject = (_c = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _c === void 0 ? void 0 : _c.reduce((acc, metadata) => {
                        acc[metadata.key] = metadata.value;
                        return acc;
                    }, {});
                    const customFieldsObject = (_d = customFields === null || customFields === void 0 ? void 0 : customFields.customFields) === null || _d === void 0 ? void 0 : _d.reduce((acc, field) => {
                        acc[field.key] = field.value;
                        return acc;
                    }, {});
                    if (!contactId && contactId.trim() === "") {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'ContactID is empty, please fill it in',
                            description: 'ContactID is empty, please fill it in',
                        });
                    }
                    if (fields.includes('Metadata')) {
                        fields = fields.filter(field => field != 'Metadata');
                    }
                    const bodyRequest = {
                        fields,
                        name,
                        phonenumber,
                        email,
                        instagram,
                        annotation,
                        tagIds,
                        ...(portfolios && { portfolioIds: portfolios }),
                        ...(sequences && { sequenceIds: sequences }),
                        ...(status && status != constants_types_1.notSend && { status: status }),
                        pictureUrl,
                        ...(customFieldsObject && { customFields: customFieldsObject }),
                        ...(metadataObject && { metadata: metadataObject }),
                        utm: {
                            source,
                            medium,
                            campaign,
                            content,
                            headline,
                            term,
                            referralUrl
                        }
                    };
                    try {
                        const data = await wts_core_service_1.WtsCoreService.updateContact(contactId, bodyRequest, token);
                        const items = [{ json: data, },];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            else if (resource === 'message') {
                if (operation === 'getMessageById') {
                    const idMessage = this.getNodeParameter('messageId', i);
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getMessageById(idMessage, token);
                        const items = [{ json: data, },];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getMessageStatus') {
                    const idMessage = this.getNodeParameter('messageId', i);
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getMessageStatus(idMessage, token);
                        const items = [
                            {
                                json: data,
                            },
                        ];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'listMessages') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    if (!sessionId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty, please fill it in',
                            description: 'SessionID is empty, please fill it in',
                        });
                    }
                    const params = {
                        ...genericParams,
                        sessionId: sessionId,
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getAllMessages(params, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendText') {
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    const from = this.getNodeParameter('channelId', i);
                    const to = this.getNodeParameter('numberToSend', i);
                    const text = this.getNodeParameter('textMessage', i);
                    const botId = this.getNodeParameter('botId', i);
                    const departmentId = this.getNodeParameter('departmentId', i);
                    const userId = departmentId != constants_types_1.notSend ? this.getNodeParameter('userIdByDepartment', i) : null;
                    const enableBot = this.getNodeParameter('enableBot', i);
                    const hiddenSession = this.getNodeParameter('hiddenSession', i);
                    const forceStartSession = this.getNodeParameter('forceStartSession', i);
                    if (!from || from == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose channel',
                            description: 'Fill in the From field',
                        });
                    }
                    if (!to) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Set an Instagram number or username for sending',
                            description: 'Fill in the To field'
                        });
                    }
                    if (!text || text.trim() == "") {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Write a text to send',
                            description: 'Fill in the Text field',
                        });
                    }
                    const body = {
                        from: from,
                        to: to,
                        body: {
                            text: text,
                        },
                        options: {
                            enableBot: enableBot,
                            hiddenSession: hiddenSession,
                            forceStartSession: forceStartSession
                        },
                        ...(departmentId != constants_types_1.notSend && { department: { id: departmentId } }),
                        ...(botId != constants_types_1.notSend && { botId: botId }),
                        ...(userId != constants_types_1.notSend && { user: { id: userId } }),
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageText(body, token, synchronous);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendFile') {
                    const fileInputFieldName = this.getNodeParameter('fileToSend', i);
                    const inputData = this.getInputData(0);
                    const fileUrl = (_e = this.getNodeParameter('urlFile', i)) !== null && _e !== void 0 ? _e : null;
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    const from = this.getNodeParameter('channelId', i);
                    const to = this.getNodeParameter('numberToSend', i);
                    const botId = this.getNodeParameter('botId', i);
                    const departmentId = this.getNodeParameter('departmentId', i);
                    const userId = departmentId != constants_types_1.notSend ? this.getNodeParameter('userIdByDepartment', i) : null;
                    const enableBot = this.getNodeParameter('enableBot', i);
                    const hiddenSession = this.getNodeParameter('hiddenSession', i);
                    const forceStartSession = this.getNodeParameter('forceStartSession', i);
                    if (!fileInputFieldName && !fileUrl) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in any of the fields, whether Url or File!',
                            description: 'Choose to send file or the file url!',
                        });
                    }
                    if (!from || from == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose channel',
                            description: 'Fill in the From field',
                        });
                    }
                    let body = {
                        from: from,
                        to: to,
                        body: {
                            fileUrl: fileUrl || null,
                            fileId: null
                        },
                        options: {
                            enableBot: enableBot,
                            hiddenSession: hiddenSession,
                            forceStartSession: forceStartSession
                        },
                        ...(departmentId != constants_types_1.notSend && { department: { id: departmentId } }),
                        ...(botId != constants_types_1.notSend && { botId: botId }),
                        ...(userId != constants_types_1.notSend && { user: { id: userId } }),
                    };
                    if (fileInputFieldName) {
                        if (!inputData || !inputData.length || !inputData[i].binary) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no data in the input',
                                description: 'There is no data in the input',
                            });
                        }
                        if (!inputData[i].binary[fileInputFieldName]) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no file with that name that comes from input',
                                description: 'There is no file with that name that comes from input',
                            });
                        }
                        const paramsRequest = await dataFileInput(this, fileInputFieldName, inputData, i);
                        const responseSaveFile = await wts_chat_service_1.WtsChatService.saveFile(this, paramsRequest.uploadData, paramsRequest.contentType, paramsRequest.filename, paramsRequest.contentLength, token);
                        body.body.fileId = responseSaveFile.data.id;
                        body.body.fileUrl = null;
                    }
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageFile(body, token, synchronous);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendTemplate') {
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    const from = this.getNodeParameter('channelId', i);
                    const template = this.getNodeParameter('templates', i);
                    if (template == null || template == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose template',
                            description: 'Fill in the Template field',
                        });
                    }
                    const templateObj = (0, n8n_workflow_1.jsonParse)(template);
                    let fileUrl = templateObj.fileType != "UNDEFINED" ? this.getNodeParameter('urlFile', i) : null;
                    const fileInputFieldName = templateObj.fileType != "UNDEFINED" ? this.getNodeParameter('fileToSend', i) : null;
                    const inputData = fileInputFieldName ? this.getInputData(i) : null;
                    const templateId = templateObj.id;
                    const paramsTemplates = this.getNodeParameter('paramsTemplates', i);
                    const paramsArray = paramsTemplates.paramsTemplatesValues;
                    const to = this.getNodeParameter('numberToSend', i);
                    const departmentId = this.getNodeParameter('departmentId', i);
                    const userId = departmentId != constants_types_1.notSend ? this.getNodeParameter('userIdByDepartment', i) : null;
                    const botId = this.getNodeParameter('botId', i);
                    const enableBot = this.getNodeParameter('enableBot', i);
                    const hiddenSession = this.getNodeParameter('hiddenSession', i);
                    const forceStartSession = this.getNodeParameter('forceStartSession', i);
                    const paramsName = paramsArray === null || paramsArray === void 0 ? void 0 : paramsArray.map(p => p.name);
                    const paramSet = new Set(paramsName);
                    const newParams = [];
                    paramSet.forEach(name => {
                        var _a, _b;
                        return newParams.push({
                            name,
                            value: (_b = (_a = paramsArray.find(param => param.name == name)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ''
                        });
                    });
                    const transformToObject = (params) => {
                        const result = {};
                        params.forEach(param => {
                            result[param.name] = param.value;
                        });
                        return result;
                    };
                    if (!from || from == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose channel',
                            description: 'Fill in the From field',
                        });
                    }
                    let fileId;
                    if (fileInputFieldName) {
                        if (!inputData || !inputData.length || !inputData[i].binary) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no data in the input',
                                description: 'There is no data in the input',
                            });
                        }
                        if (!inputData[i].binary[fileInputFieldName]) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no file with that name that comes from input',
                                description: 'There is no file with that name that comes from input',
                            });
                        }
                        const paramsRequest = await dataFileInput(this, fileInputFieldName, inputData, i);
                        const responseSaveFile = await wts_chat_service_1.WtsChatService.saveFile(this, paramsRequest.uploadData, paramsRequest.contentType, paramsRequest.filename, paramsRequest.contentLength, token);
                        fileId = responseSaveFile.data.id;
                        fileUrl = null;
                    }
                    const body = {
                        from: from,
                        to: to,
                        body: {
                            templateId: templateId,
                            ...(newParams && { parameters: transformToObject(newParams) }),
                            ...(fileUrl && { fileUrl: fileUrl }),
                            ...(fileId && { fileId: fileId })
                        },
                        options: {
                            enableBot: enableBot,
                            hiddenSession: hiddenSession,
                            forceStartSession: forceStartSession
                        },
                        ...(botId != constants_types_1.notSend && { botId: botId }),
                        ...(userId != constants_types_1.notSend && { user: { id: userId } }),
                        ...(departmentId != constants_types_1.notSend && { department: { id: departmentId } })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageTemplate(body, token, synchronous);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            else if (resource === 'session') {
                if (operation === 'listSessions') {
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    const activeAtAfter = this.getNodeParameter('activeAtAfter', i);
                    const activeAtBefore = this.getNodeParameter('activeAtBefore', i);
                    const endAtAfter = this.getNodeParameter('endAtAfter', i);
                    const endAtBefore = this.getNodeParameter('endAtBefore', i);
                    const lastInteractionAtAfter = this.getNodeParameter('lastInteractionAtAfter', i);
                    const lastInteractionAtBefore = this.getNodeParameter('lastInteractionAtBefore', i);
                    const statusSession = this.getNodeParameter('statusSession', i);
                    const departmentId = this.getNodeParameter('departmentId', i);
                    const userId = this.getNodeParameter('userId', i);
                    const tagIds = this.getNodeParameter('tagIds', i);
                    const channelsIds = this.getNodeParameter('channelsIds', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    const includeDetails = this.getNodeParameter('includeDetails', i);
                    let urlSession = `${constants_types_1.Constants.getRequesConfig(token).baseUrl}/chat/v1/session`;
                    const params = new URLSearchParams({});
                    channelsIds.forEach(id => params.append('ChannelsId', id));
                    statusSession.forEach(status => params.append('Status', status));
                    includeDetails.forEach(details => params.append('IncludeDetails', details));
                    tagIds.forEach(tagId => params.append('TagsId', tagId));
                    urlSession += `?${params.toString()}`;
                    const paramsRequest = {
                        status: statusSession,
                        ...(userId != constants_types_1.notSend && { userId: userId }),
                        ...(departmentId != constants_types_1.notSend && { departmentId: departmentId }),
                        contactId: contactId,
                        includeDetails: includeDetails,
                        ...genericParams,
                        activeAtAfter: activeAtAfter,
                        activeAtBefore: activeAtBefore,
                        endAtAfter: endAtAfter,
                        endAtBefore: endAtBefore,
                        lastInteractionAtAfter: lastInteractionAtAfter,
                        lastInteractionAtBefore: lastInteractionAtBefore
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getAllSessions(paramsRequest, token, urlSession);
                        const items = [{ json: data, }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'transferSession') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const departmentId = this.getNodeParameter('departmentId', i);
                    const userId = departmentId != constants_types_1.notSend ? this.getNodeParameter('userIdByDepartment', i) : null;
                    if (!sessionId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the field session',
                            description: 'Fill in the "sessionId" field',
                        });
                    }
                    let type = departmentId && userId ? 'USER' : 'DEPARTMENT';
                    if (departmentId != constants_types_1.notSend && userId == constants_types_1.notSend) {
                        type = 'DEPARTMENT';
                    }
                    const body = {
                        type: type,
                        ...(departmentId != constants_types_1.notSend && { newDepartmentId: departmentId }),
                        ...(userId != constants_types_1.notSend && { newUserId: userId })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.updateTransfer(sessionId, body, token);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'updateStatusSession') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const status = this.getNodeParameter('statusSessionOption', i);
                    if (!sessionId || !status) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in all fields',
                            description: 'Both sessionId and status are required to update the session status.',
                        });
                    }
                    if (!status || status === 'UNDEFINED') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Add a valid status!',
                            description: 'Add a valid status!',
                        });
                    }
                    const body = {
                        newStatus: status
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.updateStatusSession(sessionId, body, token);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getSessionById') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const includeDetails = this.getNodeParameter('includeDetails', i);
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    const body = {
                        sessionId,
                        includeDetails
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getSessionById(body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'transferToUser') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const userId = this.getNodeParameter('userId', i);
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    if (!userId || userId == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'UserID is empty!',
                            description: 'Choose a valid user'
                        });
                    }
                    const body = {
                        ...(userId != constants_types_1.notSend && { userId })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.assignUserToSession(sessionId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'concludeSession') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const reactivateOnNewMessage = this.getNodeParameter('reactivateOnNewMessage', i);
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    const body = {
                        reactivateOnNewMessage
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.concludeSession(sessionId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'updateSession') {
                    const fields = this.getNodeParameter('fieldsUpdate', i);
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const statusSessionUpdate = fields.includes('Status') ? this.getNodeParameter('statusUpdateSessionOption', i) : null;
                    const endAt = fields.includes('EndAt') ? this.getNodeParameter('endAt', i) : null;
                    const number = fields.includes('Number') ? this.getNodeParameter('number', i) : null;
                    const departmentId = fields.includes('DepartmentId') ? this.getNodeParameter('departmentIdUpdatedSession', i) : null;
                    const userId = fields.includes('UserId') ? this.getNodeParameter('usersUpdateSession', i) : null;
                    const metadata = fields.includes('Metadata') ? this.getNodeParameter('metadataUpdateSession', i) : null;
                    const metadataObject = (_f = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _f === void 0 ? void 0 : _f.reduce((acc, metadata) => {
                        acc[metadata.key] = metadata.value;
                        return acc;
                    }, {});
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    const body = {
                        ...(statusSessionUpdate != 'UNDEFINED' && { statusSessionUpdate }), endAt,
                        number, ...(departmentId != constants_types_1.notSend && { departmentId }), ...(userId != constants_types_1.notSend && { userId }), metadataObject, fields
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.updateSession(sessionId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendTextBySessionid') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const text = this.getNodeParameter('textMessage', i);
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageTextSession(sessionId, text, token, synchronous);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendFileBySessionid') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const fileUrl = (_g = this.getNodeParameter('urlFile', i)) !== null && _g !== void 0 ? _g : null;
                    const fileInputFieldName = (_h = this.getNodeParameter('fileToSend', i)) !== null && _h !== void 0 ? _h : null;
                    const inputData = fileInputFieldName ? this.getInputData(i) : null;
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    if (!sessionId || sessionId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    if (!fileUrl && !fileInputFieldName) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in any of the fields',
                            description: 'Fill in the file or url'
                        });
                    }
                    const body = {
                        fileUrl: fileUrl || null,
                        fileId: null
                    };
                    if (fileInputFieldName) {
                        if (!inputData || !inputData.length || !inputData[i].binary) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no data in the input',
                                description: 'There is no data in the input',
                            });
                        }
                        if (!inputData[i].binary[fileInputFieldName]) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no file with that name that comes from input',
                                description: 'There is no file with that name that comes from input',
                            });
                        }
                        const paramsRequest = await dataFileInput(this, fileInputFieldName, inputData, i);
                        const responseSaveFile = await wts_chat_service_1.WtsChatService.saveFile(this, paramsRequest.uploadData, paramsRequest.contentType, paramsRequest.filename, paramsRequest.contentLength, token);
                        body.fileId = responseSaveFile.data.id;
                        body.fileUrl = null;
                    }
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageFileUrlSession(sessionId, body, token, synchronous);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'sendTemplateBySessionid') {
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const template = this.getNodeParameter('templatesBySession', i);
                    const synchronous = this.getNodeParameter('synchronousMessage', i);
                    const params = (template && template != constants_types_1.notSend) ? this.getNodeParameter('paramsTemplatesSession', i) : null;
                    if (!sessionId || sessionId.trim() == '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SessionID is empty!',
                            description: 'Fill in the SessionID field'
                        });
                    }
                    if (template == constants_types_1.notSend || !template) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose a valid template',
                            description: 'Choose a valid template'
                        });
                    }
                    const obj = (0, n8n_workflow_1.jsonParse)(template);
                    let fileUrl = obj.fileType != "UNDEFINED" ? this.getNodeParameter('urlFile', i) : null;
                    const fileInputFieldName = obj.fileType != "UNDEFINED" ? this.getNodeParameter('fileToSend', i) : null;
                    const inputData = fileInputFieldName ? this.getInputData(i) : null;
                    const paramsArray = params === null || params === void 0 ? void 0 : params.paramsTemplatesValues;
                    const paramsName = paramsArray === null || paramsArray === void 0 ? void 0 : paramsArray.map(p => p.name);
                    const paramSet = new Set(paramsName);
                    const newParams = [];
                    paramSet.forEach(name => {
                        var _a, _b;
                        return newParams.push({
                            name,
                            value: (_b = (_a = paramsArray === null || paramsArray === void 0 ? void 0 : paramsArray.find(param => param.name == name)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ''
                        });
                    });
                    const transformToObject = (params) => {
                        const result = {};
                        params.forEach(param => {
                            result[param.name] = param.value;
                        });
                        return result;
                    };
                    const body = {
                        templateId: obj.id,
                        ...(newParams && { parameters: transformToObject(newParams) }),
                        fileId: null,
                        fileUrl: fileUrl
                    };
                    if (fileInputFieldName) {
                        if (!inputData || !inputData.length || !inputData[i].binary) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no data in the input',
                                description: 'There is no data in the input',
                            });
                        }
                        if (!inputData[i].binary[fileInputFieldName]) {
                            throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                                message: 'There is no file with that name that comes from input',
                                description: 'There is no file with that name that comes from input',
                            });
                        }
                        const paramRequest = await dataFileInput(this, fileInputFieldName, inputData, i);
                        const responseSaveFile = await wts_chat_service_1.WtsChatService.saveFile(this, paramRequest.uploadData, paramRequest.contentType, paramRequest.filename, paramRequest.contentLength, token);
                        body.fileId = responseSaveFile.data.id;
                        body.fileUrl = null;
                    }
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendMessageTemplateSession(sessionId, body, token, synchronous);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            else if (resource === 'panel') {
                if (operation === 'listCardAnnotations') {
                    const cardId = this.getNodeParameter('cardId', i);
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'CardID is empty, please fill it in',
                            description: 'CardID is empty, please fill it in',
                        });
                    }
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    const params = {
                        ...genericParams
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.getAllAnnotation(cardId, token, params);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'createCard') {
                    const stepId = this.getNodeParameter('stepPanels', i);
                    const title = this.getNodeParameter('title', i);
                    const description = this.getNodeParameter('description', i);
                    const position = this.getNodeParameter('position', i);
                    const userId = this.getNodeParameter('responsibleId', i);
                    const tagsPanelIds = this.getNodeParameter('tagsPanel', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    const monetaryAmount = this.getNodeParameter('monetaryAmount', i);
                    const customFields = this.getNodeParameter('customFieldsPanel', i);
                    const metadata = this.getNodeParameter('metadata', i);
                    const customFieldsObject = (_j = customFields === null || customFields === void 0 ? void 0 : customFields.customFields) === null || _j === void 0 ? void 0 : _j.reduce((acc, field) => {
                        acc[field.key] = field.value;
                        return acc;
                    }, {});
                    const metadataObject = (_k = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _k === void 0 ? void 0 : _k.reduce((acc, metadata) => {
                        acc[metadata.key] = metadata.value;
                        return acc;
                    }, {});
                    if (!stepId || stepId == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Choose a panel and its step',
                            description: 'Choose a panel and its step',
                        });
                    }
                    if (!title || title.trim() == '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Title is empty, please fill it in',
                            description: 'Title is empty, please fill it in',
                        });
                    }
                    const body = {
                        stepId: stepId,
                        title: title,
                        tagIds: tagsPanelIds,
                        ...(monetaryAmount && { monetaryAmount: monetaryAmount }),
                        ...(userId != constants_types_1.notSend && { responsibleUserId: userId }),
                        ...(contactId && { contactIds: [contactId] }),
                        ...(position && { position: position }),
                        ...(description && { description: description }),
                        ...(metadataObject && { metadata: metadataObject }),
                        ...(customFieldsObject && { customFields: customFieldsObject }),
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.createCard(body, token);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'createAnnotationText') {
                    const cardId = this.getNodeParameter('cardId', i);
                    const annotation = this.getNodeParameter('textMessage', i);
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the CardId field',
                            description: 'CardId cannot be empty',
                        });
                    }
                    if (!annotation) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the Text field',
                            description: 'Text cannot be empty',
                        });
                    }
                    const body = {
                        text: annotation
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.createAnnotationText(cardId, body, token);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'createAnnotationFile') {
                    const cardId = this.getNodeParameter('cardId', i);
                    const fileUrls = this.getNodeParameter('fileUrls', i);
                    const arrayUrls = fileUrls.fileUrl;
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the CardId field',
                            description: 'CardId cannot be empty',
                        });
                    }
                    const body = {
                        fileUrls: arrayUrls
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.createAnnotationFile(cardId, body, token);
                        const items = [];
                        items.push({ json: data });
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getAllPanels') {
                    const titlePanel = this.getNodeParameter("title", i);
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    const params = {
                        title: titlePanel,
                        ...genericParams
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.getAllPanels(params, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getPanelById') {
                    const panelId = this.getNodeParameter('panelId', i);
                    const includeDetails = this.getNodeParameter('includeDetailsPanel', i);
                    if (!panelId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the panel ID field',
                            description: 'Fill in the field with the panel id'
                        });
                    }
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.getPanelById(includeDetails, panelId, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'listCards') {
                    const panelId = this.getNodeParameter('panels', i);
                    const stepId = this.getNodeParameter('stepPanels', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    const responsibleUserId = this.getNodeParameter('responsibleId', i);
                    const textFilter = this.getNodeParameter('textFilter', i);
                    const includeArchived = this.getNodeParameter('includeArchived', i);
                    const includeDetails = this.getNodeParameter('includeDetailsGetCards', i);
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    if (!panelId || panelId == constants_types_1.notSend) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in the panel ID field',
                            description: 'Fill in the field with the panel id'
                        });
                    }
                    const params = {
                        panelId: panelId,
                        ...(stepId != constants_types_1.notSend && { stepId: stepId }),
                        ...(contactId && { contactId: contactId }),
                        ...(responsibleUserId != constants_types_1.notSend && { responsibleUserId: responsibleUserId }),
                        ...(textFilter && { textFilter: textFilter }),
                        ...(includeArchived && { includeArchived: includeArchived }),
                        ...(includeDetails && { includeDetails: includeDetails }),
                        ...genericParams
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.getAllCards(params, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'getCardById') {
                    const cardId = this.getNodeParameter('cardId', i);
                    const includeDetails = this.getNodeParameter('includeDetailsGetCards', i);
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'CardID is empty, please fill it in',
                            description: 'CardID is empty, please fill it in',
                        });
                    }
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.getCardById(cardId, includeDetails, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'duplicateCard') {
                    const cardId = this.getNodeParameter('cardId', i);
                    const stepId = this.getNodeParameter('stepId', i);
                    const archiveOriginalCard = this.getNodeParameter('archiveOriginalCard', i);
                    const fieldsCard = this.getNodeParameter('fieldsCard', i);
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'CardID is empty, please fill it in',
                            description: 'CardID is empty, please fill it in',
                        });
                    }
                    const body = {
                        stepId,
                        archiveOriginalCard,
                        fieldsCard
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.duplicateCard(cardId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'deleteCardAnnotation') {
                    const cardId = this.getNodeParameter('cardId', i);
                    const noteId = this.getNodeParameter('noteId', i);
                    if (!cardId || !noteId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in NoteId and CardId',
                            description: 'Fill in all fields, CardId and NoteId',
                        });
                    }
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.deleteAnnotationCard(cardId, noteId, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (resource === 'panel' && operation === 'updateCard') {
                    const cardId = this.getNodeParameter('cardIdUpdateCard', i);
                    let fields = this.getNodeParameter('fieldsUpdateCard', i);
                    const title = fields.includes('Title') ? this.getNodeParameter('titleCardUpdateCard', i) : null;
                    const includeArchived = fields.includes('Archived') ? this.getNodeParameter('includeArchivedUpdateCard', i) : null;
                    const description = fields.includes('Description') ? this.getNodeParameter('descriptionUpdateCard', i) : null;
                    const monetaryAmount = fields.includes('MonetaryAmount') ? this.getNodeParameter('monetaryAmountUpdateCard', i) : null;
                    const position = fields.includes('Position') ? this.getNodeParameter('positionUpdateCard', i) : null;
                    const stepId = fields.includes('StepId') ? this.getNodeParameter('stepIdUpdateCard', i) : null;
                    const contactIds = fields.includes('ContactIds') ? this.getNodeParameter('contactsIdUpdateCard', i) : null;
                    const arrayContactIds = contactIds === null || contactIds === void 0 ? void 0 : contactIds.contactId;
                    const dueDate = fields.includes('DueDate') ? this.getNodeParameter('dueDateUpdateCard', i) : null;
                    const updateCardTagId = fields.includes('TagIds') ? this.getNodeParameter('updateCardTagIdUpdateCard', i) : null;
                    const userId = fields.includes('ResponsibleUserId') ? this.getNodeParameter('userIdUpdateCard', i) : null;
                    const metadata = fields.includes('Metadata') ? this.getNodeParameter('metadataUpdateCard', i) : null;
                    const customFields = fields.includes('CustomFields') ? this.getNodeParameter('customFieldsCardUpdateCard', i) : null;
                    const customFieldsObject = (_l = customFields === null || customFields === void 0 ? void 0 : customFields.customFields) === null || _l === void 0 ? void 0 : _l.reduce((acc, field) => {
                        acc[field.key] = field.value;
                        return acc;
                    }, {});
                    const metadataObject = (_m = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _m === void 0 ? void 0 : _m.reduce((acc, metadata) => {
                        acc[metadata.key] = metadata.value;
                        return acc;
                    }, {});
                    if (!cardId) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in CardID',
                            description: 'Fill in all fields, CardID',
                        });
                    }
                    if (!fields.length) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Fill in Fields',
                            description: 'Fill in all fields',
                        });
                    }
                    if (fields.includes('Metadata')) {
                        fields = fields.filter(field => field != 'Metadata');
                    }
                    const body = {
                        cardId: cardId,
                        fields: fields,
                        title,
                        includeArchived,
                        description,
                        monetaryAmount,
                        position,
                        stepId,
                        dueDate,
                        updateCardTagId,
                        ...(userId != constants_types_1.notSend && { userId }),
                        customFieldsObject,
                        metadataObject,
                        arrayContactIds
                    };
                    try {
                        const data = await wts_crm_service_1.WtsCrmService.updateCard(cardId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            else if (resource === 'chatbot') {
                if (operation === 'sendChatbot') {
                    const botKey = this.getNodeParameter('chatbotId', i);
                    const from = this.getNodeParameter('channelId', i);
                    const to = this.getNodeParameter('numberToSend', i);
                    const sessionId = this.getNodeParameter('sessionId', i);
                    const skipIfBotInExecution = this.getNodeParameter('skipIfBotInExecution', i);
                    const skipIfInProgress = this.getNodeParameter('skipIfInProgress', i);
                    const forceStartSession = this.getNodeParameter('forceStartSession', i);
                    const sessionMetadatas = this.getNodeParameter('sessionMetadatas', i);
                    const contactMetadatas = this.getNodeParameter('contactMetadatas', i);
                    const sessionMetadata = (_o = sessionMetadatas === null || sessionMetadatas === void 0 ? void 0 : sessionMetadatas.sessionMetadata) === null || _o === void 0 ? void 0 : _o.reduce((acc, field) => {
                        acc[field.key] = field.value;
                        return acc;
                    }, {});
                    const contactMetadata = (_p = contactMetadatas === null || contactMetadatas === void 0 ? void 0 : contactMetadatas.contactMetadata) === null || _p === void 0 ? void 0 : _p.reduce((acc, field) => {
                        acc[field.key] = field.value;
                        return acc;
                    }, {});
                    const body = {
                        ...(botKey != constants_types_1.notSend && { botKey: botKey }),
                        ...(from != constants_types_1.notSend && { from: from }),
                        ...(to != constants_types_1.notSend && { to: to }),
                        sessionId,
                        skipIfBotInExecution,
                        skipIfInProgress,
                        forceStartSession,
                        sessionMetadata,
                        contactMetadata
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.sendChatbot(body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            else if (resource === 'sequence') {
                if (operation === 'getContactsBySequence') {
                    const sequenceId = this.getNodeParameter('sequenceId', i);
                    if (!sequenceId || sequenceId.trim() === '') {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'SequenceID is empty!',
                            description: 'Fill in the SequenceID field'
                        });
                    }
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getContactsBySequence(sequenceId, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                if (operation === 'listSequences') {
                    const includeDetailsSequence = this.getNodeParameter('includeDetailsSequence', i);
                    const name = this.getNodeParameter('name', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    const genericParams = (0, utils_1.getParamsGenerics)(this);
                    const params = {
                        includeDetailsSequence, name, contactId,
                        ...genericParams
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.getAllSequences(params, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'addContactToSequence') {
                    const sequenceId = this.getNodeParameter('sequenceId', i);
                    const phoneNumber = this.getNodeParameter('phonenumber', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    if (!contactId && !phoneNumber) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Add a contact either by ID or phone number',
                            description: 'Add a contact either by ID or phone number'
                        });
                    }
                    const body = {
                        ...(phoneNumber && { phoneNumber: phoneNumber }),
                        ...(contactId && { contactId: contactId })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.addContactToSequence(sequenceId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'removeContactToSequence') {
                    const sequenceId = this.getNodeParameter('sequenceId', i);
                    const phoneNumber = this.getNodeParameter('phonenumber', i);
                    const contactId = this.getNodeParameter('contactId', i);
                    if (!contactId && !phoneNumber) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Remove a contact either by ID or phone number',
                            description: 'Remove a contact either by ID or phone number'
                        });
                    }
                    const body = {
                        ...(phoneNumber && { phoneNumber: phoneNumber }),
                        ...(contactId && { contactId })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.removeContactToSequence(sequenceId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'addContactsToSequence') {
                    const sequenceId = this.getNodeParameter('sequenceId', i);
                    const phoneNumbers = this.getNodeParameter('phonenumbers', i);
                    const arrayPhoneNumbers = phoneNumbers.phonenumber;
                    const contactIds = this.getNodeParameter('contactsId', i);
                    const arrayContactIds = contactIds.contactId;
                    if (!arrayContactIds && !arrayPhoneNumbers) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Add a contacts either by ID or phone number',
                            description: 'Add a contacts either by ID or phone number'
                        });
                    }
                    const body = {
                        ...(arrayPhoneNumbers && { phoneNumbers: arrayPhoneNumbers }),
                        ...(arrayContactIds && { contactIds: arrayContactIds })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.addContactsToSequence(sequenceId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
                else if (operation === 'removeContactsToSequence') {
                    const sequenceId = this.getNodeParameter('sequenceId', i);
                    const arrayPhoneNumbers = this.getNodeParameter('phonenumbers', i);
                    const phoneNumbers = arrayPhoneNumbers.phonenumber;
                    const arrayContactIds = this.getNodeParameter('contactsId', i);
                    const contactIds = arrayContactIds.contactId;
                    if (!contactIds && !phoneNumbers) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), {
                            message: 'Remove a contacts either by ID or phone number',
                            description: 'Remove a contacts either by ID or phone number'
                        });
                    }
                    const body = {
                        ...(contactIds && { contactIds }),
                        ...(phoneNumbers && { phoneNumbers })
                    };
                    try {
                        const data = await wts_chat_service_1.WtsChatService.removeContactsToSequence(sequenceId, body, token);
                        const items = [{ json: data }];
                        results[i] = items;
                    }
                    catch (error) {
                        throw new n8n_workflow_1.NodeApiError(this.getNode(), error);
                    }
                }
            }
            if (i < items.length - 1 && i < 50) {
                await new Promise(resolve => setTimeout(resolve, utils_2.delay));
                console.log("Esperando 3 segundos");
            }
        }
        return results;
        async function dataFileInput(context, fileInputName, inputData, i) {
            var _a;
            const binaryData = context.helpers.assertBinaryData(i, fileInputName);
            let filename = (_a = binaryData.fileName) !== null && _a !== void 0 ? _a : 'file';
            let contentType = binaryData.mimeType;
            let contentLength = 0;
            const itemBinaryData = inputData[i].binary[fileInputName];
            let uploadData;
            if (itemBinaryData.id) {
                uploadData = await context.helpers.getBinaryStream(itemBinaryData.id);
                const metadata = await context.helpers.getBinaryMetadata(itemBinaryData.id);
                contentLength = metadata.fileSize;
            }
            else {
                uploadData = buffer_1.Buffer.from(itemBinaryData.data, n8n_workflow_1.BINARY_ENCODING);
                contentLength = uploadData.length;
            }
            const result = {
                filename, contentType,
                contentLength, uploadData
            };
            return result;
        }
    }
}
exports.WtsChat = WtsChat;
//# sourceMappingURL=WtsChat.node.js.map