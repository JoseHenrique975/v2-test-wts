import { ILoadOptionsFunctions } from 'n8n-workflow';
import axios from 'axios';
import { Constants, notSend } from './constants.types';
import { sendRequestOrAutoPagination } from '../utils';

export class WtsCoreService {

	//-----------------------------------------
	//          Requests Load Methods
	//------------------------------------------

	static async getCustomFields(otp: ILoadOptionsFunctions): Promise<Array<{ name: string; value: string }>> {
		const credentials = await otp.getCredentials('wtsApi');
		const receivedToken = credentials?.apiKey as string;
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/contact/custom-field`;

		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const fields = response.data;
			fields.push({name: 'Undefined', key: notSend})
		    
			fields.sort((a:any, b:any) => {
				if (a.name === 'Undefined') return -1; 
                if (b.name === 'Undefined') return 1; 
			    return a.name.localeCompare(b.name)
			});

			return fields.map((field: { key: string; name: string }) => ({
				name: field.name,
				value: field.key,
			}));
		} catch (error) {
			throw new Error(`Failed to load custom fields: ${error.response.data.text}`);
		}
	}

	static async getTagsIds(otp: ILoadOptionsFunctions): Promise<Array<{ name: string; value: string }>> {
		const credentials = await otp.getCredentials('wtsApi');
		const receivedToken = credentials?.apiKey as string;
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/tag`;

		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const tags = response.data;

			tags.sort((a:any, b:any) => {
				if (a.name === 'Undefined') return -1; 
                if (b.name === 'Undefined') return 1; 
			    return a.name.localeCompare(b.name)
			});

			return tags.map((tag: { name: string; id: string }) => ({
				name: tag.name,
				value: tag.id,
			}));
		} catch (error) {
			throw new Error(`Failed to load tags: ${error.response.data.text}`);
		}
	}

	static async getUsersIds(otp: ILoadOptionsFunctions): Promise<Array<{ name: string; value: string }>> {
		const credentials = await otp.getCredentials('wtsApi');
		const receivedToken = credentials?.apiKey as string;

		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/agent`;

		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const users = response.data;
			const mappedResult = users.map((user: any) => ({
				name: user.name,
				value: user.userId,
			}));
			mappedResult.push({name: 'Undefined', value: notSend});
			mappedResult.sort((a: any, b:any) => {
				if (a.name === 'Undefined') return -1; 
                if (b.name === 'Undefined') return 1;
				return a.name.localeCompare(b.name)
			});
			return mappedResult;
		} catch (error) {
			throw new Error(`Failed to load users: ${error.response.data.text}`);
		}
	}

	static async getDepartmentsIds(otp: ILoadOptionsFunctions): Promise<Array<{ name: string; value: string }>> {
		const credentials = await otp.getCredentials('wtsApi');
		const receivedToken = credentials?.apiKey as string;

		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/department`;

		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const departments = response?.data;
	
			departments.push({name: 'Undefined', id: notSend});
			departments.sort((a: any, b:any) => {
				if(a.name === 'Undefined')return -1;
				if(b.name === 'Undefined')return 1;
				return a.name.localeCompare(b.name)
		    });

			return departments.map((department: { name: string; id: string }) => ({
				name: department.name,
				value: department.id,
			}));
		} catch (error) {
			throw new Error(`Failed to load departments: ${error.response.data.text}`);
		}
	}


	static async getUsersByDepartments(departmentId: string, ild: ILoadOptionsFunctions): Promise<Array<{ name: string; value: string }>> {
		const credentials = await ild.getCredentials('wtsApi');
		const receivedToken = credentials?.apiKey as string;
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/agent`;

		if (!departmentId) {
			throw new Error(`Choose department`);
		}

		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const users = response.data;
			const result: any = [];
			result.push({name: 'Undefined', id: notSend});

			users.map((user: any) => {
				user.departments.map((element: any) => {
					if (element.departmentId === departmentId) {
						result.push(user);
					}
				})
			});

			result.sort((a: any, b:any) => {
				if(a.name === 'Undefined')return -1;
				if(b.name === 'Undefined')return 1;
				return a.name.localeCompare(b.name)
		    });

			return result.map((user: any) => ({
				name: user.name,
				value: user.userId || user.id,
			}));
		} catch (error) {
			throw new Error(`Failed to load users: ${error.response.data.text}`);
		}
	}

	//-----------------------------------------
	//          Requests Operation
	//-----------------------------------------

	static async getAllContacts(params: any, receivedToken: string): Promise<any> {
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		let url = `${baseUrl}/core/v1/contact`;

		if(params.includeDetails){
			const parameters = new URLSearchParams({});
			params.includeDetails?.forEach((details: string) => parameters.append('IncludeDetails', details ));
			url+=`?${parameters.toString()}`;
		}

		try {
			const data = await sendRequestOrAutoPagination({
				...params,
				status: params.status
			}, url, token);
			return data;
		} catch (error) {
			throw new Error(`API request failed: ${error.response.data.text}`);
		}
	}

	static async getContactById(contactId: string, includeDetails: Array<string>, receivedToken: string): Promise<any> {
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		let urlContact = `${baseUrl}/core/v1/contact/${contactId}`;

		if(includeDetails.length){
			const parameters = new URLSearchParams({});
			includeDetails?.forEach((details: string) => parameters.append('IncludeDetails', details ));
			urlContact+=`?${parameters.toString()}`;
		}

		try {
			const response = await axios.get(urlContact, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const data = response.data;
			return data;
		} catch (error) {
			throw new Error(`API request failed: ${error.response.data.text}`);
		}
	}

	static async getContactByPhone(phoneNumber: string, includeDetails: Array<string>, receivedToken: string): Promise<any> {
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		let url = `${baseUrl}/core/v1/contact/phonenumber/${phoneNumber}`;

		if(includeDetails.length){
			const parameters = new URLSearchParams({});
			includeDetails?.forEach((details: string) => parameters.append('IncludeDetails', details ));
			url+=`?${parameters.toString()}`;
		}

		try {
			const response = await axios.get(url, {
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

	static async createContact(body: any, receivedToken: string): Promise<any> {
		const { token, baseUrl } = Constants.getRequesConfig(receivedToken);
		const url = `${baseUrl}/core/v1/contact`;
		try {
			const response = await axios.post(url, body, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});

			const data = response.data;
			return data;
		} catch (error) {
			throw new Error(`API request failed: ${error.response.data.text}`);
		}
	}
}