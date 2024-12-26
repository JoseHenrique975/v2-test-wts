import type { INodeProperties } from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['contact']
            }
        },
        options: [
            {
                name: 'Create Contact',
                value: 'createContact',
                action: 'Create contact',
                default: 'contact'
            },
            {
                name: 'Get All Contacts',
                value: 'listContacts',
                description: 'Fetch all contacts from the API',
                action: 'List contacts',
                default: 'contact'
            },
            {
                name: 'Get By ID',
                value: 'getContactById',
                description: 'Get contact by ID',
                action: 'Get contact by id',
                default: 'contact'
            },
            {
                name: 'Get By Phone',
                value: 'getContactByPhone',
                description: 'Get contact by phonenumber',
                action: 'Get contact by phone',
                default: 'contact'
            },
            {
                name: 'Update Contact',
                value: 'updateContact',
                action: 'Update contact',
                default: 'contact'
            }
        
        ],
        default: 'listContacts',
        noDataExpression: true
    }
]

export const contactFields: INodeProperties[] = [

    //----------------------------------------
    //           contact: CREATE
    //----------------------------------------

    {
        displayName: 'E-Mail',
        name: 'email',
        type: 'string',
        default: '',

        placeholder: 'example@example.com',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },
    {
        displayName: 'Instagram',
        name: 'instagram',
        type: 'string',
        default: '',
        description: 'Enter your Instagram name',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },
    {
        displayName: 'Annotation',
        name: 'annotation',
        type: 'string',
        default: '',
        typeOptions: {
            rows: 4,
        },
        description: 'Make your note',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },
    {
        displayName: 'Upsert',
        name: 'upsert',
        type: 'boolean',
        default: false,
        description: 'Whether with this option enabled, if the contact already exists in the database, it will be updated with the new data and returned',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },
    {
        displayName: 'Get If Exists?',
        name: 'getIfExists',
        type: 'boolean',
        default: false,
        description: 'Whether with this option enabled, if the contact already exists in the database, it will be returned and no data will be updated',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },
    {
        displayName: 'Custom Fields',
        name: 'customFields',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add custom fields',
        typeOptions: {
            multipleValues: true,
        },

        options: [
            {
                name: 'customFields',
                displayName: 'Custom Fields',
                values: [
                    {
                        displayName: 'Key Name or ID',
                        name: 'key',
                        type: 'options',
                        default: '',
                        typeOptions: {
                            loadOptionsMethod: 'getCustomFields',
                        },
                        description: 'Select the key for the custom field. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
                    },
                    {
                        displayName: 'Value',
                        name: 'value',
                        type: 'string',
                        default: '',
                        description: 'Value to set for the metadata key',
                    },
                ],
            },
        ],
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['createContact'],
            },
        },
    },

    //----------------------------------------
    //              contact: GET
    //----------------------------------------

    {
        displayName: 'Contact ID',
        name: 'contactId',
        type: 'string',
        default: '',
        placeholder: 'Enter contact ID',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['getContactById', 'updateContact'],
            },
        },
    },

    {
        displayName: 'Include Details',
        name: 'includeDetailsContacts',
        type: 'multiOptions',
        default: [],
        placeholder: 'Choose include details',
        options: [
            {
                name: 'Tags',
                value: 'Tags',
            },
            {
                name: 'CustomFields',
                value: 'CustomFields',
            }
        ],
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['listContacts', 'getContactById', 'getContactByPhone'],
            },
        },
    },

    {
        displayName: 'Status',
        name: 'statusContact',
        type: 'options',
        default: 'UNDEFINED',
        placeholder: 'Choose status contact',
        description: 'Status of contacts to be listed. If not informed, the default value is ACTIVE.',
        options: [
            {
                name: 'Active',
                value: 'ACTIVE'
            },
            {
                name: 'Archived',
                value: 'ARCHIVED'
            },
            {
                name: 'Blocked',
                value: 'BLOCKED'
            },
            {
                name: 'Undefined',
                value: 'UNDEFINED'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['listContacts'],
            },
        },
    },

    //Update Contact 
    {
        displayName: 'Fields',
        name: 'fieldsUpdateContact',
        type: 'multiOptions',
        default: [],
        placeholder: 'Choose include fields',
        options: [
            {
                name: 'Annotation',
                value: 'Annotation'
            },
            {
                name: 'CustomFields',
                value: 'CustomFields'
            },
            {
                name: 'Email',
                value: 'Email'
            },
            {
                name: 'Instagram',
                value: 'Instagram'
            },
            {
                name: 'Metadata',
                value: 'Metadata'
            },
            {
                name: 'Name',
                value: 'Name',
            },
            {
                name: 'PhoneNumber',
                value: 'PhoneNumber',
            },
            {
                name: 'PictureUrl',
                value: 'PictureUrl'
            },
            {
                name: 'Portfolio',
                value: 'Portfolio'
            },
            {
                name: 'SequenceIds',
                value: 'SequenceIds'
            },
            {
                name: 'Status',
                value: 'Status'
            },
            {
                name: 'Tags',
                value: 'Tags'
            },
            {
                name: 'Utm',
                value: 'Utm'
            },
        ],
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
            },
        },
    },

    {
        displayName: 'Name',
        name: 'nameUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Name']
            },
        },
    },

    {
        displayName: 'Phonenumber',
        name: 'phonenumberUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['PhoneNumber']
            },
        },
    },

    {
        displayName: 'Email',
        name: 'emailUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Email']
            },
        },
    },

    {
        displayName: 'Instagram',
        name: 'instagramUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Instagram']
            },
        },
    },

    {
        displayName: 'Annotation',
        name: 'annotationUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Annotation']
            },
        },
    },

    {
        displayName: 'Tag Names or IDs',
        name: 'tagsUpdateContact',
        type: 'multiOptions',
        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        default: [],
        placeholder: 'Choose Tag',
        typeOptions: {
            loadOptionsMethod: 'getTagsAndUpdate'
        },
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Tags']
            },
        },
    },

    {
        displayName: 'Portfolio Names or IDs',
        name: 'portfoliosUpdateContact',
        type: 'multiOptions',
        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        default: [],
        placeholder: 'Choose portfolios',
        typeOptions: {
            loadOptionsMethod: 'getPortfolio'
        },
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Portfolio']
            },
        },
    },

    {
        displayName: 'Sequence Names or IDs',
        name: 'sequencesUpdateContact',
        type: 'multiOptions',
        description: 'Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>',
        default: [],
        placeholder: 'Choose sequences',
        typeOptions: {
            loadOptionsMethod: 'getSequences'
        },
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['SequenceIds']
            },
        },
    },

    {
        displayName: 'Status',
        name: 'statusUpdateContact',
        type: 'options',
        default: 'NOT_SEND',
        placeholder: 'Choose status contact',
        description: 'Status of contacts to be listed',
        options: [
            {
                name: 'Active',
                value: 'ACTIVE'
            },
            {
                name: 'Archived',
                value: 'ARCHIVED'
            },
            {
                name: 'Blocked',
                value: 'BLOCKED'
            },
            {   name: 'Empty',
                value: 'NOT_SEND'
            }
        ],
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Status']
            },
        },
    },

    {
        displayName: 'Picture Url',
        name: 'pictureUrlUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['PictureUrl']
            },
        },
    },

    {
        displayName: 'Custom Fields',
        name: 'customFieldsUpdateContact',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add custom fields',
        typeOptions: {
            multipleValues: true,
        },
        options: [
            {
                name: 'customFields',
                displayName: 'Custom Fields',
                values: [
                    {
                        displayName: 'Key Name or ID',
                        name: 'key',
                        type: 'options',
                        default: '',
                        noDataExpression: true,
                        typeOptions: {
                            loadOptionsMethod: 'getCustomFieldsUpdate',
                        },
                        description: 'Select the key for the custom field. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.',
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
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['CustomFields']
            },
        },
    },

    {
        displayName: 'Metadata',
        name: 'metadataUpdateContact',
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
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Metadata']
            },
        },
    },

    {
        displayName: 'Source UTM',
        name: 'sourceUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Medium UTM',
        name: 'mediumUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Campaign UTM',
        name: 'campaignUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Content UTM',
        name: 'contentUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Headline UTM',
        name: 'headlineUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Term UTM',
        name: 'termUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },

    {
        displayName: 'Referral Url UTM',
        name: 'referralUrlUtmUpdateContact',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['contact'],
                operation: ['updateContact'],
                fieldsUpdateContact: ['Utm']
            },
        },
    },


]