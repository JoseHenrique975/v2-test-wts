import { INodeProperties } from "n8n-workflow";
//import { notSend } from "../constants.types";

export const messageOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['message']
            }
        },
        options: [
            {
                name: 'Get All Messages',
                value: 'listMessages',
                action: 'List messages',
            },
            {
                name: 'Get Message By ID',
                value: 'getMessageById',
                action: 'Get message by id',
            },
            {
                name: 'Get Message Status',
                value: 'getMessageStatus',
                action: 'Get message status',
            },
            {
                name: 'Send File',
                value: 'sendFile',
                action: 'Send file',
            },
            {
                name: 'Send Template',
                value: 'sendTemplate',
                action: 'Send template',
            },
            {
                name: 'Send Text',
                value: 'sendText',
                action: 'Send text',
            },
        ],
        default: 'getMessageById',
        noDataExpression: true
    },
]

export const messageFields: INodeProperties[] = [

    {
        displayName: 'From',
        name: 'channelId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose Channel',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getChannelsIds',
        },
        options: [
            {name:'Undefined', value: 'NOT_SEND'}
        ],
        displayOptions: {
            show: {
                resource: ['message', 'chatbot'],
                operation: ['sendText', 'sendFile', 'sendTemplate', 'sendChatbot'],
            },
        },
    },

    {
        displayName: 'Template',
        name: 'templates',
        type: 'options',
        typeOptions: {
            loadOptionsDependsOn: ['channelId'],
            loadOptionsMethod: 'getTemplates'
        },
        options: [
            {name:'Undefined', value: 'NOT_SEND'}
        ],
        default: 'NOT_SEND',
        placeholder: 'Choose your template',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendTemplate'],
            },
        },
    },

    {
        displayName: 'Params',
        name: 'paramsTemplates',
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
                        displayName: 'Name',
                        name: 'name',
                        type: 'options',
                        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
                        default: '',
                        typeOptions: {
                            loadOptionsMethod: 'getNamesParamsTemplates'
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
                resource: ['message'],
                operation: ['sendTemplate']
            }
        }
    },

    {
        displayName: 'Message ID',
        name: 'messageId',
        type: 'string',
        default: '',
        placeholder: 'Enter message ID',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['getMessageById', 'getMessageStatus'],
            },
        },
    },

    {
        displayName: 'To',
        name: 'numberToSend',
        type: 'string',
        default: '',
        placeholder: '',
        description: 'Number to send message to',
        displayOptions: {
            show: {
                resource: ['message', 'chatbot'],
                operation: ['sendText', 'sendFile', 'sendTemplate', 'sendChatbot'],
            },
        },
    },

    {
        displayName: 'Url',
        name: 'urlFile',
        type: 'string',
        default: '',
        placeholder: '',
        description: 'URL file',
        displayOptions: {
            show: {
                resource: ['message', 'session'],
                operation: ['sendFile', 'sendFileBySessionid', 'sendTemplate', 'sendTemplateBySessionid'],
            },
        },
    },

    {
        displayName: 'Input Field File Name',
        name: 'fileToSend',
        type: 'string',
        default: '',
        placeholder: 'Place the file',
        description: "The name of the input field that contains the base64 string to convert to a file. Use dot-notation for deep fields (e.g. 'level1.level2.currentKey').",
        displayOptions: {
            show: {
                resource: ['message', 'session'],
                operation: ['sendFile', 'sendFileBySessionid', 'sendTemplateBySessionid', 'sendTemplate'],
            }
        }
    },


   

    /*--------Send Messages Options----------*/
    {
        displayName: 'Send Synchronous Message',
        name: 'synchronousMessage',
        type: 'boolean',
        description: 'Whether determines synchronous message sending',
        default: false,
        displayOptions: {
            show: {
                resource: ['message', 'session'],
                operation: ['sendText', 'sendFile', 'sendTemplate', 'sendTextBySessionid', 'sendTemplateBySessionid', 'sendFileBySessionid'],
            },
        },
    },
    
    {
        displayName: 'Enable Bot',
        name: 'enableBot',
        type: 'boolean',
        default: false,
        description: 'Whether determines whether the chatbot should be activated upon receiving a response from the contact',
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendText', 'sendFile', 'sendTemplate'],
            },
        },
    },
    {
        displayName: 'Hidden Session',
        name: 'hiddenSession',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendText', 'sendFile', 'sendTemplate'],
            },
        },
    },
    {
        displayName: 'Force Start Session',
        name: 'forceStartSession',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                resource: ['message', 'chatbot'],
                operation: ['sendText', 'sendFile', 'sendTemplate', 'sendChatbot'],
            },
        },
    },
]