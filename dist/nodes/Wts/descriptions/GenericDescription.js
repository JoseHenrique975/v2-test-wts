"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageFields = exports.dateFields = exports.metadataFields = exports.commonFields = void 0;
exports.commonFields = [
    {
        displayName: 'Text',
        name: 'textMessage',
        type: 'string',
        default: '',
        placeholder: 'Write the text you want to send',
        typeOptions: {
            rows: 3,
        },
        displayOptions: {
            show: {
                resource: ['message', 'panel', 'session'],
                operation: ['sendText', 'createAnnotationText', 'sendTextBySessionid'],
            },
        },
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: '',
        placeholder: 'Example',
        displayOptions: {
            show: {
                resource: ['contact', 'sequence'],
                operation: ['createContact', 'listSequences'],
            },
        },
    },
    {
        displayName: 'Tag Names or IDs',
        name: 'tagIds',
        type: 'multiOptions',
        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        default: [],
        typeOptions: {
            loadOptionsMethod: 'getTagsIds',
        },
        displayOptions: {
            show: {
                resource: ['contact', 'session'],
                operation: ['createContact', 'listSessions'],
            },
        },
    },
    {
        displayName: 'Session ID',
        name: 'sessionId',
        type: 'string',
        default: '',
        placeholder: 'Enter session ID',
        displayOptions: {
            show: {
                resource: ['message', 'session', 'panel', 'chatbot'],
                operation: ['listMessages', 'transferSession', 'updateStatusSession', 'sendChatbot', 'getSessionById', 'transferToUser', 'concludeSession', 'updateSession', 'sendTextBySessionid', 'sendFileBySessionid', 'sendTemplateBySessionid'],
            },
        },
    },
    {
        displayName: 'Chatbot Name or ID',
        name: 'chatbotId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose bot',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getChatbots',
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['chatbot'],
                operation: ['sendChatbot'],
            },
        },
    },
    {
        displayName: 'Chatbot Name or ID',
        name: 'botId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose bot',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getBots',
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['message'],
                operation: ['sendText', 'sendFile', 'sendTemplate'],
            },
        },
    },
    {
        displayName: 'User Name or ID',
        name: 'userId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose user',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getUsersIds',
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['session', 'panel'],
                operation: ['listSessions', 'transferToUser'],
            },
        },
    },
    {
        displayName: 'Responsible Name or ID',
        name: 'responsibleId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose user',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getUsersIds',
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['session', 'panel'],
                operation: ['createCard', 'listCards'],
            },
        },
    },
    {
        displayName: 'Department Name or ID',
        name: 'departmentId',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose department',
        description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        typeOptions: {
            loadOptionsMethod: 'getDepartmentsIds',
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['message', 'session'],
                operation: ['sendText', 'listSessions', 'sendFile', 'sendTemplate', 'transferSession'],
            },
        },
    },
    {
        displayName: 'User ID',
        name: 'userIdByDepartment',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose user',
        description: 'Update this list of users, every time you change departments, to show users from that department. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
        typeOptions: {
            loadOptionsMethod: 'getUsersByDepartments',
            loadOptionsDependsOn: ['departmentId'],
        },
        options: [
            { name: 'Undefined', value: 'NOT_SEND' }
        ],
        displayOptions: {
            show: {
                resource: ['message', 'session'],
                operation: ['sendText', 'sendFile', 'sendTemplate', 'transferSession']
            },
            hide: {
                departmentId: ['NOT_SEND']
            }
        },
    },
    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        default: '',
        placeholder: 'Enter contact ID',
        displayOptions: {
            show: {
                resource: ['session', 'panel', 'sequence'],
                operation: ['listSessions', 'createCard', 'listCards', 'listSequences', 'addContactToSequence', 'removeContactToSequence'],
            },
        },
    },
    {
        displayName: 'Phone Number',
        name: 'phonenumber',
        type: 'string',
        default: '',
        placeholder: 'Enter phonenumber',
        displayOptions: {
            show: {
                resource: ['contact', 'session', 'sequence'],
                operation: ['getContactByPhone', 'createContact', 'addContactToSequence', 'removeContactToSequence'],
            },
        },
    },
    {
        displayName: 'Contacts ID',
        name: 'contactsId',
        type: 'collection',
        default: [],
        placeholder: 'Add Contact',
        options: [
            {
                displayName: 'ID',
                name: 'contactId',
                type: 'string',
                default: '',
                typeOptions: {
                    multipleValues: true
                },
                placeholder: 'Add ID contact'
            },
        ],
        description: 'Specify a list of items',
        displayOptions: {
            show: {
                resource: ['panel', 'sequence'],
                operation: ['addContactsToSequence', 'removeContactsToSequence']
            }
        }
    },
];
exports.metadataFields = [
    {
        displayName: 'Metadata',
        name: 'metadata',
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
                resource: ['contact', 'panel'],
                operation: ['createContact', 'createCard'],
            },
        },
    },
];
exports.dateFields = [
    {
        displayName: 'CreatedAt.After',
        name: 'createdAtAfter',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['message', 'session', 'panel', 'sequence', 'contact'],
                operation: ['listMessages', 'listSessions', 'getAllPanels', 'listCards', 'listSequences', 'listContacts', 'listCardAnnotations'],
            },
        },
    },
    {
        displayName: 'CreatedAt.Before',
        name: 'createdAtBefore',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['message', 'session', 'panel', 'sequence', 'contact'],
                operation: ['listMessages', 'listSessions', 'getAllPanels', 'listCards', 'listSequences', 'listContacts', 'listCardAnnotations'],
            },
        },
    },
    {
        displayName: 'UpdatedAt.After',
        name: 'updatedAtAfter',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['message', 'session', 'panel', 'sequence', 'contact'],
                operation: ['listMessages', 'listSessions', 'getAllPanels', 'listCards', 'listSequences', 'listContacts', 'listCardAnnotations'],
            },
        },
    },
    {
        displayName: 'UpdatedAt.Before',
        name: 'updatedAtBefore',
        type: 'dateTime',
        default: '',
        description: 'Enter YYYY-MM-DD hh:mm and the time according to your time zone ⚠️',
        displayOptions: {
            show: {
                resource: ['message', 'session', 'panel', 'sequence', 'contact'],
                operation: ['listMessages', 'listSessions', 'getAllPanels', 'listCards', 'listSequences', 'listContacts', 'listCardAnnotations'],
            },
        },
    },
];
exports.pageFields = [
    {
        displayName: 'Auto Pagination',
        name: 'autoPagination',
        type: 'boolean',
        default: false,
        description: 'Whether automatic pagination, increasing the items on each page',
        displayOptions: {
            show: {
                resource: ['session', 'contact', 'message', 'panel', 'sequence'],
                operation: ['listSessions', 'listContacts', 'listMessages', 'listCardAnnotations', 'listCards', 'getAllPanels', 'listSequences'],
            },
        },
    },
    {
        displayName: 'Max Pages',
        name: 'maxPage',
        type: 'number',
        typeOptions: {
            alwaysOpenEditWindow: true,
            minValue: 1,
            maxValue: 100,
        },
        default: 10,
        placeholder: 'Determine max pages',
        displayOptions: {
            show: {
                resource: ['session', 'contact', 'message', 'panel', 'sequence'],
                operation: ['listSessions', 'listContacts', 'listMessages', 'listCardAnnotations', 'listCards', 'getAllPanels', 'listSequences'],
                autoPagination: [true],
            },
        },
    },
    {
        displayName: 'Page Number',
        name: 'pageNumber',
        type: 'number',
        default: 1,
        description: 'The page number to retrieve',
        typeOptions: {
            alwaysOpenEditWindow: true,
        },
        displayOptions: {
            show: {
                resource: ['contact', 'message', 'session', 'panel', 'sequence'],
                operation: ['listContacts', 'listMessages', , 'listCardAnnotations', 'getAllPanels', 'listCards', 'listSequences', 'listSessions'],
                autoPagination: [false],
            },
        },
    },
    {
        displayName: 'Page Size',
        name: 'pageSize',
        type: 'number',
        default: 15,
        description: 'The number of items per page',
        displayOptions: {
            show: {
                resource: ['contact', 'message', 'session', 'panel', 'sequence'],
                operation: ['listContacts', 'listMessages', , 'listCardAnnotations', 'getAllPanels', 'listCards', 'listSequences', 'listSessions'],
                autoPagination: [false],
            },
        },
        typeOptions: {
            minValue: 1,
            maxValue: 100,
            alwaysOpenEditWindow: true,
        },
    },
    {
        displayName: 'Order By',
        name: 'orderBy',
        type: 'string',
        default: '',
        description: 'Field to sort by',
        displayOptions: {
            show: {
                resource: ['contact', 'message', 'session', 'panel', 'sequence'],
                operation: ['listContacts', 'listMessages', 'listSessions', 'listCardAnnotations', 'getAllPanels', 'listCards', 'listSequences'],
            },
        },
    },
    {
        displayName: 'Order Direction',
        name: 'orderDirection',
        type: 'options',
        options: [
            { name: 'Ascending', value: 'ASCENDING' },
            { name: 'Descending', value: 'DESCENDING' },
        ],
        default: 'ASCENDING',
        description: 'Direction of sorting',
        displayOptions: {
            show: {
                resource: ['contact', 'message', 'session', 'panel', 'sequence'],
                operation: ['listContacts', 'listMessages', 'listSessions', 'listCardAnnotations', 'getAllPanels', 'listCards', 'listSequences'],
            },
        },
    },
];
//# sourceMappingURL=GenericDescription.js.map