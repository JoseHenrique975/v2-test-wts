import { INodeProperties } from "n8n-workflow";
//import { notSend } from "../constants.types";

export const sessionOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['session']
            }
        },
        options: [
            {
                name: 'ChangeStatus',
                value: 'updateStatusSession',
                action: 'Update status session',
                default: 'session'
            },
            {
                name: 'Complete Session',
                value: 'concludeSession',
                action: 'Complete session',
                default: 'session'
            },
            {
                name: 'Get All Sessions',
                value: 'listSessions',
                action: 'List sessions',
                default: 'session'
            },
            {
                name: 'Get Session By ID',
                value: 'getSessionById',
                action: 'Get session by id',
                default: 'session'
            },
            {
                name: 'Send File In Session',
                value: 'sendFileBySessionid',
                action: 'Send file in session',
                default: 'session'
            },
            {
                name: 'Send Template In Session',
                value: 'sendTemplateBySessionid',
                action: 'Send template in session',
                default: 'session'
            },
            {
                name: 'Send Text In Session',
                value: 'sendTextBySessionid',
                action: 'Send text in session',
                default: 'session'
            },
            {
                name: 'Transfer Session',
                value: 'transferSession',
                action: 'Transfer session',
                default: 'session'
            },
            {
                name: 'Transfer to User',
                value: 'transferToUser',
                action: 'Transfer session to user',
                default: 'session'
            },
            {
                name: 'UpdateSession',
                value: 'updateSession',
                action: 'Update session',
                default: 'session'
            },
        ],
        default: 'listSessions',
        noDataExpression: true
    },
]

export const sessionFields: INodeProperties[] = [

    {
        displayName: 'Channel Names or IDs',
        name: 'channelsIds',
        type: 'multiOptions',
        default: [],
        placeholder: 'Choose Channel',
        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getChannelsIds',
        },
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },
    {
        displayName: 'ActiveAt.After',
        name: 'activeAtAfter',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },
    {
        displayName: 'ActiveAt.Before',
        name: 'activeAtBefore',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },
    {
        displayName: 'EndAt.After',
        name: 'endAtAfter',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },

    {
        displayName: 'EndAt.Before',
        name: 'endAtBefore',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },

    {
        displayName: 'LastInteractionAt.After',
        name: 'lastInteractionAtAfter',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },
    {
        displayName: 'LastInteractionAt.Before',
        name: 'lastInteractionAtBefore',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },

    {
        displayName: 'Status Session',
        name: 'statusSession',
        type: 'multiOptions',
        default: [],
        placeholder: 'Choose status',
        options: [
            { name: 'Completed', value: 'COMPLETED' },
            { name: 'Hidden', value: 'HIDDEN' },
            { name: 'In Progress', value: 'IN_PROGRESS' },
            { name: 'Pending', value: 'PENDING' },
            { name: 'Started', value: 'Started' },
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions'],
            },
        },
    },

    {
        displayName: 'Status',
        name: 'statusSessionOption',
        type: 'options',
        default: 'UNDEFINED',
        placeholder: 'Choose status',
        options: [
            { name: 'Completed', value: 'COMPLETED' },
            { name: 'Hidden', value: 'HIDDEN' },
            { name: 'In Progress', value: 'IN_PROGRESS' },
            { name: 'Pending', value: 'PENDING' },
            { name: 'Started', value: 'STARTED' },
            { name: 'Undefined', value: 'UNDEFINED' }
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateStatusSession'],
            },
        },
    },

    {
        displayName: 'Include Details',
        name: 'includeDetails',
        type: 'multiOptions',
        default: [],
        placeholder: 'Choose include details',
        options: [
            {
                name: 'AgentDetails',
                value: 'AgentDetails',
            },
            {
                name: 'ChannelDetails',
                value: 'ChannelDetails',
            },
            {
                name: 'ChannelTypeDetails',
                value: 'ChannelTypeDetails',
            },
            {
                name: 'ClassificationDetails',
                value: 'ClassificationDetails',
            },
            {
                name: 'ContactDetails',
                value: 'ContactDetails',
            },
            {
                name: 'DepartmentsDetails',
                value: 'DepartmentsDetails',
            },
            {
                name: 'Undefined',
                value: 'Undefined',
            },
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['listSessions', 'getSessionById'],
            },
        },
    },

    {
        displayName: 'Reactivate On New Message',
        name: 'reactivateOnNewMessage',
        type: 'boolean',
        default: false,
        description: 'Whether the conversation should be reactivated when receiving a new message from the contact. The default value is false.',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['concludeSession'],
            },
        },
    },

    {
        displayName: 'Template Name or ID',
        name: 'templatesBySession',
        type: 'options',
        typeOptions: {
            loadOptionsDependsOn: ['sessionId'],
            loadOptionsMethod: 'getTemplatesSession'
        },
        options: [
            {name: 'Undefined', value: 'NOT_SEND'}
        ],
        default: 'NOT_SEND',
        placeholder: 'Choose your template',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['sendTemplateBySessionid'],
            },
        },
    },

    {
        displayName: 'Params',
        name: 'paramsTemplatesSession',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add param',
        typeOptions: {
            multipleValues: true
        },
        options: [
            {
                name: 'paramsTemplatesValues',
                displayName: 'Params',
                values: [
                    {
                        displayName: 'Name or ID',
                        name: 'name',
                        type: 'options',
                        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
                        default: '',
                        typeOptions: {
                            loadOptionsDependsOn: ['templatesBySession'],
                            loadOptionsMethod: 'getNameParamsTemplatesSession'
                        }
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'Value to set for the metadata key',
                    }
                ]
            }
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['sendTemplateBySessionid']
            },
            hide: {
                templatesBySession: ['NOT_SEND']
            }
        }
    },
]

export const updateSessionFields: INodeProperties[] = [
    {
        displayName: 'Fields',
        name: 'fieldsUpdate',
        type: 'multiOptions',
        default: [],
        description: 'Defining the fields to be updated',
        options: [
            { name: 'Autocomplete', value: 'Autocomplete' },
            { name: 'DepartmentId', value: 'DepartmentId' },
            { name: 'EndAt', value: 'EndAt' },
            { name: 'Metadata', value: 'Metadata' },
            { name: 'Number', value: 'Number' },
            { name: 'ReactivateDisabled', value: 'ReactivateDisabled' },
            { name: 'Status', value: 'Status' },
            { name: 'UserId', value: 'UserId' },
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
            },
        },
    },

    {
        displayName: 'Department Name or ID',
        name: 'departmentIdUpdatedSession',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose department',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getDepartmentsIdsUpdate',
        },
        options: [
            {name:'Empty', value: 'NOT_SEND'}
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['DepartmentId']
            },
        },
    },

    {
        displayName: 'User Name or ID',
        name: 'usersUpdateSession',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose user',
        description: 'Update this list of users, every time you change departments, to show users from that department. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
        typeOptions: {
            loadOptionsMethod: 'getUsersIdsUpdate',
        },  
        options: [
            {name:'Empty', value: 'NOT_SEND'}
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['UserId']
            },
        },
    },

    {
        displayName: 'EndAt',
        name: 'endAt',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['EndAt']
            },
        },
    },

    {
        displayName: 'Number',
        name: 'number',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['Number']
            },
        },
    },

    {
        displayName: 'Status Session',
        name: 'statusUpdateSessionOption',
        type: 'options',
        default: 'UNDEFINED',
        placeholder: 'Choose status',
        options: [
            { name: 'Completed', value: 'COMPLETED' },
            { name: 'Hidden', value: 'HIDDEN' },
            { name: 'In Progress', value: 'IN_PROGRESS' },
            { name: 'Pending', value: 'PENDING' },
            { name: 'Started', value: 'STARTED' },
            { name: 'Undefined', value: 'UNDEFINED' }
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['Status']
            },
        },
    },

    {
        displayName: 'Metadata',
        name: 'metadataUpdateSession',
        placeholder: 'Add metadata',
        type: 'fixedCollection',
        default: {},
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                name: 'metadata',
                displayName: 'Metadata',
                values: [
                    {
                        displayName: 'Key',
                        name: 'key',
                        type: 'string',
                        default: '',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                    },
                ],
            },
        ],
        displayOptions: {
            show: {
                resource: ['session'],
                operation: ['updateSession'],
                fieldsUpdate: ['Metadata']
            },
        },
    },
]