import { IExecuteFunctions, ILoadOptionsFunctions } from 'n8n-workflow';
import { Buffer } from 'buffer';
import { Readable } from 'stream';
export declare class WtsChatService {
    static ThrowError(inputData: any, file: string): void;
    static getMessageById(idMessage: string, receivedToken: string): Promise<any>;
    static getMessageStatus(idMessage: string, receivedToken: string): Promise<any>;
    static getAllMessages(params: any, receivedToken: string): Promise<any>;
    static sendMessageText(body: any, receivedToken: string, synchronous: boolean): Promise<any>;
    static sendMessageFile(body: any, receivedToken: string, synchronous: boolean): Promise<any>;
    static sendMessageTemplate(body: any, receivedToken: string, synchronous: boolean): Promise<any>;
    static getAllSessions(params: any, receivedToken: string, urlWithParams: string): Promise<any>;
    static getSessionById(body: any, receivedToken: string): Promise<any>;
    static updateTransfer(sessionId: string, body: any, receivedToken: string): Promise<any>;
    static updateStatusSession(sessionId: string, body: any, receivedToken: string): Promise<any>;
    static assignUserToSession(sessionId: string, body: any, receivedToken: string): Promise<any>;
    static concludeSession(sessionId: string, body: any, receivedToken: string): Promise<any>;
    static updateSession(sessionId: string, body: any, receivedToken: string): Promise<any>;
    static sendChatbot(body: any, receivedToken: string): Promise<any>;
    static sendMessageTextSession(sessionId: string, text: string, receivedToken: string, synchronous: boolean): Promise<any>;
    static sendMessageFileUrlSession(sessionId: string, body: any, receivedToken: string, synchronous: boolean): Promise<any>;
    static sendMessageTemplateSession(sessionId: string, body: any, receivedToken: string, synchronous: boolean): Promise<any>;
    static getAllSequences(params: any, receivedToken: string): Promise<any>;
    static getContactsBySequence(sequenceId: string, receivedToken: string): Promise<any>;
    static addContactToSequence(sequenceId: string, body: any, receivedToken: string): Promise<any>;
    static removeContactToSequence(sequenceId: string, body: any, receivedToken: string): Promise<any>;
    static addContactsToSequence(sequenceId: string, body: any, receivedToken: string): Promise<any>;
    static removeContactsToSequence(sequenceId: string, body: any, receivedToken: string): Promise<any>;
    static saveFile(tes: IExecuteFunctions, file: Buffer | Readable, mimetype: string, filename: string, contentLength: number, token: string): Promise<any>;
    static getChannelsIds(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getBots(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getTemplates(channelId: string, ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getTemplateIds(channelId: string, receivedToken: string, nameTemplate: string): Promise<{
        id: string;
    }>;
    static getNameTemplates(templateName: string, channelId: string, receivedToken: string): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getTemplatesSession(sessionId: string, ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static passRequestValues(result: any, data: any): void;
    static getUrlFile(bodyFile: {
        mimeType: string;
        name: string;
    }, receivedToken: string): Promise<any>;
    static updateFileS3(urlFile: string, dataFile: Buffer | Readable, mimeType: string, contentLength: number): Promise<import("axios").AxiosResponse<any, any>>;
    static saveFileS3(filename: string, mimetype: string, keyS3: string, receivedToken: string): Promise<import("axios").AxiosResponse<any, any>>;
}
