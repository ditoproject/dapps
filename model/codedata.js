module.exports = {
    name: 'codedatas',

    fields: [
        {
            name: 'barcode',
            type: 'String',
            length: '50',
            not_null: true,
            primary_key: true
        },
        {
            name: 'barcodedark',
            type: 'String',
            length: 50,
            not_null: true
        },
        {
            name: 'rfidid',
            type: 'String',
            length: 100,
            not_null: true
        },
        {
            name: 'timestamp',
            type: 'Number',        
            not_null: true
        }
    ]
}