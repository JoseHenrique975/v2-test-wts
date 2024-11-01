import { ILoadOptionsFunctions } from 'n8n-workflow';
export declare class WtsCrmService {
    static getAllAnnotation(cardId: string, receivedToken: string, params: any): Promise<any>;
    static createCard(body: any, receivedToken: string): Promise<any>;
    static createAnnotationText(cardId: string, body: any, receivedToken: string): Promise<any>;
    static createAnnotationFile(cardId: string, body: any, receivedToken: string): Promise<any>;
    static getAllPanels(params: any, receivedToken: string): Promise<any>;
    static getPanelById(includeDetails: any, panelId: string, receivedToken: string): Promise<any>;
    static getAllCards(parameters: any, receivedToken: string): Promise<any>;
    static getCardById(cardId: string, includeDetails: any, receivedToken: string): Promise<any>;
    static duplicateCard(cardId: string, body: any, receivedToken: string): Promise<any>;
    static deleteAnnotationCard(cardId: string, noteId: string, receivedToken: string): Promise<any>;
    static updateCard(idCard: string, bodyParams: any, receivedToken: string): Promise<any>;
    static getPanels(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: any;
    }>>;
    static getCustomFieldsPanel(idPanel: string, ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getStepsPanelId(panelId: string, ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: any;
    }>>;
    static getTagsPanel(panelId: string, otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: any;
    }>>;
    static getTagsByIdCard(idCard: string, otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: any;
    }>>;
    static getCustomFieldsByPanel(idPanel: string, receivedToken: string): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getCustomFieldsByIdCard(idCard: string, otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
}
