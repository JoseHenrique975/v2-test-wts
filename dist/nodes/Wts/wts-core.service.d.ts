import { ILoadOptionsFunctions } from 'n8n-workflow';
export declare class WtsCoreService {
    static getCustomFields(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getTagsIds(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getUsersIds(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getUsersIdsUpdate(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getDepartmentsIds(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getDepartmentsIdsUpdate(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getUsersByDepartments(departmentId: string, ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getTagsAndUpdate(ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getPortfolio(ild: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getCustomFieldsUpdate(otp: ILoadOptionsFunctions): Promise<Array<{
        name: string;
        value: string;
    }>>;
    static getAllContacts(params: any, receivedToken: string): Promise<any>;
    static getContactById(contactId: string, includeDetails: Array<string>, receivedToken: string): Promise<any>;
    static getContactByPhone(phoneNumber: string, includeDetails: Array<string>, receivedToken: string): Promise<any>;
    static createContact(body: any, receivedToken: string): Promise<any>;
    static updateContact(id: string, bodyRequest: any, receivedToken: string): Promise<any>;
}
