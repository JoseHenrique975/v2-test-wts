"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequenceFields = exports.sequenceOperations = void 0;
exports.sequenceOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        displayOptions: {
            show: {
                resource: ['sequence']
            }
        },
        options: [
            {
                name: 'Add Contact To Sequence',
                value: 'addContactToSequence',
                action: 'Add contact to sequence',
                default: 'sequence'
            },
            {
                name: 'Add Contacts To Sequence',
                value: 'addContactsToSequence',
                action: 'Add contacts to sequence',
                default: 'sequence'
            },
            {
                name: 'Get All Sequences',
                value: 'listSequences',
                action: 'List sequences',
                default: 'sequence'
            },
            {
                name: 'Get Contacts By Sequence',
                value: 'getContactsBySequence',
                action: 'List contacts by sequence',
                default: 'sequence'
            },
            {
                name: 'Remove Contact To Sequence',
                value: 'removeContactToSequence',
                action: 'Remove contact to sequence',
                default: 'sequence'
            },
            {
                name: 'Remove Contacts To Sequence',
                value: 'removeContactsToSequence',
                action: 'Remove contacts to sequence',
                default: 'sequence'
            },
        ],
        default: 'addContactToSequence',
        noDataExpression: true
    }
];
exports.sequenceFields = [
    {
        displayName: 'Sequence ID',
        name: 'sequenceId',
        type: 'string',
        default: '',
        placeholder: 'Enter sequence ID',
        displayOptions: {
            show: {
                resource: ['sequence'],
                operation: ['getContactsBySequence', 'addContactToSequence', 'removeContactToSequence', 'addContactsToSequence', 'removeContactsToSequence']
            }
        }
    },
    {
        displayName: 'Include Details',
        name: 'includeDetailsSequence',
        type: 'multiOptions',
        default: [],
        description: 'Defining the fields to be updated',
        options: [
            { name: 'ContactExecutingCount', value: 'ContactExecutingCount' },
            { name: 'ExecutionStats', value: 'ExecutionStats' }
        ],
        displayOptions: {
            show: {
                resource: ['sequence'],
                operation: ['listSequences']
            }
        }
    },
    {
        displayName: 'Phonenumbers',
        name: 'phonenumbers',
        type: 'collection',
        default: [],
        placeholder: 'Add Contact',
        options: [
            {
                displayName: 'Phonenumber',
                name: 'phonenumber',
                type: 'string',
                default: '',
                typeOptions: {
                    multipleValues: true
                },
                placeholder: 'Add phonenumber contact'
            },
        ],
        description: 'Specify a list of items',
        displayOptions: {
            show: {
                resource: ['sequence'],
                operation: ['addContactsToSequence', 'removeContactsToSequence']
            }
        }
    },
];
//# sourceMappingURL=SequenceDescription.js.map